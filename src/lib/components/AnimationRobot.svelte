<script lang="ts">
import { onDestroy } from 'svelte';
import {type RobotStatus } from '$lib/types';

export let status: RobotStatus = 'smiling';
export let delay = 1000;

const robot1 = '/ROBOT_1.PNG';
const robot2 = '/ROBOT_2.PNG';
const robotThinking = '/ROBOT_Thinking.PNG';
const robotSmiling = '/ROBOT_Smiling.PNG';
let current = robotSmiling;
let interval: number;

const switchImage = () => current = current === robot1 ? robot2 : robot1;

const reset = () => {
    current = robotSmiling;
}

$: {
    if (status === 'speaking') {
        interval = setInterval(switchImage, delay) as unknown as number;
    } else if (status === 'smiling') {
        current = robotSmiling;
        clearInterval(interval);
    } else if (status === 'thinking') {
        current = robotThinking;
        clearInterval(interval);
    }
}

onDestroy(() => { clearInterval(interval) });

</script>

<img src="{current}" alt="robot"/>