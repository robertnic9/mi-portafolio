import { useEffect, useRef } from "react";

export function ScaledText({ children }) {
    const wrapperRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        const resize = () => {
            const wrapper = wrapperRef.current;
            const inner = innerRef.current;
            if (!wrapper || !inner) return;

            // Reset para medir el tamaño real
            inner.style.transform = "scale(1)";

            const scaleX = wrapper.offsetWidth / inner.offsetWidth;
            const scaleY = wrapper.offsetHeight / inner.offsetHeight;
            const scale = Math.min(scaleX, scaleY, 1); // nunca crece, solo encoge

            inner.style.transform = `scale(${scale})`;
            inner.style.transformOrigin = "top left";
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div ref={wrapperRef} className="relative overflow-hidden w-full h-full">
            <div ref={innerRef} className="absolute top-0 left-0">
                {children}
            </div>
        </div>
    );
}