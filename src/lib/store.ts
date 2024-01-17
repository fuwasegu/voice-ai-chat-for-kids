import { writable, type Writable } from "svelte/store";
import type { UserSetting } from "./types";
import { browser } from "$app/environment";

const defaultSetting: UserSetting = { age: 5, apiKey: '' };
export const setting: Writable<UserSetting> = writable(defaultSetting);

if (browser) {
    const stored = localStorage.getItem('user_setting');
    if (stored !== null) {
        setting.set(JSON.parse(stored));
    }

    setting.subscribe((value) => {
        localStorage.setItem('user_setting', JSON.stringify(value));
    });
}



