import { useEffect, useState } from "react";

export const useMousePosition = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [setPos]);
    
    return pos;
};
