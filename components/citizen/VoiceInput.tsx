'use client';

import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import 'regenerator-runtime/runtime';

interface VoiceInputProps {
    onResult: (text: string) => void;
}

export default function VoiceInput({ onResult }: VoiceInputProps) {
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognitionInstance = new SpeechRecognition();
                recognitionInstance.continuous = false;
                recognitionInstance.interimResults = false;
                recognitionInstance.lang = 'en-US';

                recognitionInstance.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    onResult(transcript);
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
    }, [onResult]);

    const toggleListening = () => {
        if (!recognition) {
            toast.error('Voice input is not supported in this browser.');
            return;
        }

        if (isListening) {
            recognition.stop();
        } else {
            recognition.start();
            setIsListening(true);
        }
    };

    return (
        <div className="relative inline-block">
            {isListening && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-red-500/30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
            )}
            <Button
                variant="outline"
                size="icon"
                onClick={toggleListening}
                className={`relative z-10 rounded-full transition-colors ${isListening ? 'bg-red-100 border-red-200 text-red-600' : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                title={isListening ? 'Stop Listening' : 'Start Voice Input'}
            >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
            {isListening && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                    Listening...
                </div>
            )}
        </div>
    );
}
