<script lang="ts">
import Icon from '@iconify/svelte';
import CircleButton from "$lib/components/CircleButton.svelte";
import { css } from "styled-system/css";
import { stack } from "styled-system/patterns";
import type { Message } from '$lib/types';
import { postMessage } from '$lib/chat';
import { record, type Transcript } from '$lib/recognition';
import AnimationRobot from '$lib/components/AnimationRobot.svelte';
  import { speak } from '$lib/speech';
  import { getPrompt } from '$lib/prompts';
  import { MessageQueue, type ReplySet } from '$lib/queue';

let recording = false;
let speaking = false;
let thinking = false;
let transcript: Transcript = { value: '' };

let messageQueue = new MessageQueue(10); // 10 往復分だけ常に保持

const recordVoice = async () => {
    recording = true;

    transcript = await record(1000);

    recording = false;

    return transcript;
}

const generateResponse = async (message: string) => {
    thinking = true;

    const prompt: Message<'system'> = {
        role: 'system',
        content: getPrompt(),
    };
    const userMessage: Message<'user'> = {
        role: 'user',
        content: message,
    };

    const response = await postMessage([prompt, ...messageQueue.getFlatList(), userMessage]);

    thinking = false;

    const answer: Message<'assistant'> = {
        role: 'assistant',
        content: response,
    };

    const replySet: ReplySet = {
        user: userMessage,
        assistant: answer,
    };

    // 履歴として Queue に保存
    messageQueue.enqueue(replySet);

    return answer;
}

const speakText = async (text: string) => {
    speaking = true;

    await speak(text);

    speaking = false;
}

const click = async () => {
    try {
        const recordingResult = await recordVoice();
        const generatedResponse = await generateResponse(recordingResult.value);
        await speakText(generatedResponse.content);
    } catch (e) {
        recording = false;
        speaking = false;
        thinking = false;
    }
}

</script>

<div
    class={stack({
        justify: 'center',
        align: 'center'
    })}
>
    <div
        class={css({
            marginTop: '80px',
            height: '120px',
            width: '120px',
        })}
    >
        <CircleButton
            on:click={() => click()}
            disable={recording}
        >
            <span
                class={css({
                    fontSize: '60px',
                })}
            >
                {#if recording}
                    <Icon icon="eos-icons:three-dots-loading" />
                {:else}
                    <Icon icon="bi:mic-fill" />
                {/if}
            </span>
        </CircleButton>
    </div>
    <div
        class={css({
            height: '120px',
            display: 'flex',
            alignItems: 'center',
        })}
    >
        {#if thinking}
            <spam
                class={css({
                    fontSize: '60px',
                })}
            >
                <Icon icon="eos-icons:bubble-loading"/>
            </spam>
        {/if}
    </div>
    <div
        class={css({
            width: '300px',
        })}
    >
        <AnimationRobot status={speaking ? 'speaking' : (thinking ? 'thinking' : 'smiling')} delay={200}></AnimationRobot>
    </div>
</div>
