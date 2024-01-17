import { get } from "svelte/store";
import type { Message } from "./types";
import { setting } from "./store";

const s = get(setting);
const key = s.apiKey;

export const postMessage = async (messages: Message<any>[]) => {
    if (key === '') return '';

    const body = JSON.stringify({
        messages: messages,
        model: 'gpt-3.5-turbo',
    });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        },
        body: body,
    });

    const data = await response.json();
    const reply: string = data.choices[0].message.content;

    return reply;
}

