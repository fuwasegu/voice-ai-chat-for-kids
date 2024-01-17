import { get } from "svelte/store";
import { setting } from "./store";

export const getPrompt = () => {
    const s = get(setting);
    return basePrompt(s.age);
}

const basePrompt = (age: number): string => `
これから，あなたは ${age} 歳の子供と１対１で会話をしてもらいます．
したがって，${age} 歳児の相応の喋り方，対応をしてください．
また，返答はできるだけ短く簡潔にお願いします．
そして，難しい言葉を使うことのないように注意してください．
`;