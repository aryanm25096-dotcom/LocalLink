import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

interface UseSpeechRecognitionReturn {
    isListening: boolean;
    transcript: string;
    startListening: () => void;
    stopListening: () => void;
    hasRecognitionSupport: boolean;
}

export const useSpeechRecognition = (): UseSpeechRecognitionReturn => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState<any>(null);
    const [hasRecognitionSupport, setHasRecognitionSupport] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                setHasRecognitionSupport(true);
                const recognitionInstance = new SpeechRecognition();
                recognitionInstance.continuous = false;
                recognitionInstance.interimResults = false;
                recognitionInstance.lang = 'en-US';

                recognitionInstance.onresult = (event: any) => {
                    const currentTranscript = event.results[0][0].transcript;
                    setTranscript(currentTranscript);
                    setIsListening(false);
                };

                recognitionInstance.onerror = (event: any) => {
                    console.error('Speech recognition error', event.error);
                    setIsListening(false);
                    toast.error('Voice input failed. Please try again.');
                };

                recognitionInstance.onend = () => {
                    setIsListening(false);
                };

                setRecognition(recognitionInstance);
            }
        }
    }, []);

    const startListening = useCallback(() => {
        if (recognition && !isListening) {
            try {
                recognition.start();
                setIsListening(true);
                setTranscript(''); // Clear previous transcript
            } catch (error) {
                console.error('Error starting recognition:', error);
            }
        }
    }, [recognition, isListening]);

    const stopListening = useCallback(() => {
        if (recognition && isListening) {
            recognition.stop();
            setIsListening(false);
        }
    }, [recognition, isListening]);

    return {
        isListening,
        transcript,
        startListening,
        stopListening,
        hasRecognitionSupport,
    };
};
