import { useState, useEffect } from "react";

export function useTypewriter(text, speed = 50) {
        const [index, setIndex] = useState(0);

        useEffect(() => {
                setIndex(0);
        }, [text]);

        useEffect(() => {
                if (index >= text.length) return;
                const t = setTimeout(() => setIndex(i => i + 1), speed);
                return () => clearTimeout(t);
        }, [index, text, speed]);

        return {
                displayed: text.slice(0, index),
                done: index >= text.length,
        };
}
