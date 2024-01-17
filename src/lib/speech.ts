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