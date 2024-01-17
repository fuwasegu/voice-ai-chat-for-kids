const createRecognition = () => {
    const recognition = new webkitSpeechRecognition();

    recognition.lang = 'ja-JP';
    recognition.continuous = true;
    recognition.interimResults = true;

    return recognition;
}

type RecordText = string;

export type Transcript = {
    value: RecordText,
};

export const record = async (silenceDelay: number = 1000): Promise<Transcript> => {
    const recognition = createRecognition();
    const transcript: Transcript = { value: '' };

    let lastTimeoutId: number | undefined;
    const clearIf = () => lastTimeoutId !== undefined && clearTimeout(lastTimeoutId);

    return new Promise((resolve) => {
        recognition.onresult = (event) => {
            clearIf();

            const results = Array.from(event.results);
            transcript.value = results.reduce((acc, result) => acc + result[0].transcript, '' as string);

            lastTimeoutId = setTimeout(() => {
                recognition.stop();
            }, silenceDelay) as unknown as number;
        };

        recognition.onend = () => {
            clearIf();

            resolve(transcript);
        };

        recognition.onerror = (event) => {
            clearIf();

            // エラーが発生した場合は空文字を返す
            resolve({ value: '' });
        };

        recognition.start();
    })
}