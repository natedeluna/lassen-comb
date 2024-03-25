"use client"
import React, { useEffect, useRef, useState } from 'react';

interface ScrollTextAppearProps {
    children?: React.ReactNode;
}

const ScrollTextAppear: React.FC<ScrollTextAppearProps> = ({ children }) => {;
    const observer = useRef<IntersectionObserver | null>(null);

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("text-stone-800");
            } else {
                entry.target.classList.remove("text-stone-800");
            }
        });
    }
    useEffect(() => {
        observer.current = new IntersectionObserver(
            callback,{
                rootMargin: "-200px 0px",
            }
        );

        const currentObserver = observer.current;

        document.querySelectorAll('.text-stone-400').forEach((el) => {
            currentObserver.observe(el);
        });

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, []);

    return (
        <div className="scroll-text-appear">
            {children}
        </div>
    );
};

export default ScrollTextAppear;