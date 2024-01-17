import type { Message } from "./types"

export type ReplySet = {
    user: Message<'user'>,
    assistant: Message<'assistant'>,
}

export class MessageQueue {
    private queue: ReplySet[];
    private readonly capacity: number;

    constructor(capacity: number) {
        this.queue = [];
        this.capacity = capacity;
    }

    enqueue(item: ReplySet) {
        this.queue.push(item);
        if (this.queue.length > this.capacity) {
            this.queue.shift();
        }
    }

    dequeue(): ReplySet | undefined {
        return this.queue.shift();
    }

    size(): number {
        return this.queue.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    peek(): ReplySet | undefined {
        return this.queue[0];
    }

    getFlatList(): Message<'user' | 'assistant'>[] {
        return this.queue.flatMap(r => [r.user , r.assistant])
    }
}