export const speak = async (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = 'ja-JP';
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    return new Promise<void>((resolve) => {
        speech.onend = () => resolve();
        speech.onerror = () => resolve();

        window.speechSynthesis.speak(speech);
    });
}

/**
 * iOS Safari ではイベント発行がされず命令が無視される
 * 初回は JavaScript 上のユーザーイベントから直接呼び出す必要があるという制限がある．
 * したがってページロード後粗y書いはダミーのユーザーイベントを実行する．
 * 本関数はそのためのダミー．
 */
export const dummy = () => {
    const speech = new SpeechSynthesisUtterance('');
    speech.volume = 0;
    window.speechSynthesis.speak(speech);
}