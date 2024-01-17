export type Message<T extends 'user' | 'assistant' | 'system'> = {
    role: T,
    content: string,
}

export type RobotStatus = 'smiling' | 'thinking' | 'speaking';

export type UserSetting = {
    age: number,
    apiKey: string,
};