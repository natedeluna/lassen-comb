import React, { useState, useEffect, useMemo } from 'react';

interface ScrewSVGProps {
    screwHighlighted: boolean;
    className?: string;
}

const ScrewSVG: React.FC<ScrewSVGProps> = ({ screwHighlighted, className }) => (
<svg width="16" height="16" className={`transition ease-out ${className}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8966 7.94828C13.8966 11.2334 11.2334 13.8966 7.94828 13.8966C4.66313 13.8966 2 11.2334 2 7.94828C2 4.66313 4.66313 2 7.94828 2C11.2334 2 13.8966 4.66313 13.8966 7.94828Z" fill="white"/>
    <path d="M7.94828 14.6724C11.6619 14.6724 14.6724 11.6619 14.6724 7.94828C14.6724 4.23464 11.6619 1.22414 7.94828 1.22414C4.23464 1.22414 1.22414 4.23464 1.22414 7.94828C1.22414 11.6619 4.23464 14.6724 7.94828 14.6724Z" className='transition duration-700' stroke={screwHighlighted ? "#00000033" : "#D7D7D786"} strokeWidth="1.55172"/>
    <g filter="url(#filter0_i_0_1)">
    <path className='rotate-screw transition-all duration-700 origin-center' d="M7.02748 5.50008C7.34964 4.62946 8.58103 4.62946 8.90318 5.50008L9.15621 6.18388C9.2575 6.4576 9.47331 6.67341 9.74703 6.7747L10.4308 7.02772C11.3014 7.34988 11.3014 8.58127 10.4308 8.90343L9.74703 9.15646C9.47331 9.25774 9.2575 9.47355 9.15621 9.74727L8.90318 10.4311C8.58103 11.3017 7.34964 11.3017 7.02748 10.4311L6.77445 9.74727C6.67317 9.47355 6.45736 9.25774 6.18364 9.15646L5.49984 8.90343C4.62922 8.58127 4.62922 7.34988 5.49984 7.02772L6.18364 6.7747C6.45736 6.67341 6.67317 6.4576 6.77445 6.18388L7.02748 5.50008Z" fill={screwHighlighted ? "#00000050" : "#F1EFEE"}/>
    </g>
    <path className='rotate-screw transition-all duration-700 origin-center' d="M9.36723 6.1058L9.1142 5.422C8.71956 4.35549 7.21111 4.35549 6.81646 5.422L6.56344 6.1058C6.48494 6.31793 6.31769 6.48518 6.10555 6.56368L5.42176 6.81671C4.35525 7.21135 4.35525 8.7198 5.42176 9.11444L6.10555 9.36747C6.31769 9.44597 6.48494 9.61322 6.56344 9.82535L6.81646 10.5092C7.21111 11.5757 8.71956 11.5757 9.1142 10.5092L9.36723 9.82535C9.44572 9.61322 9.61298 9.44597 9.82511 9.36747L10.5089 9.11444C11.5754 8.7198 11.5754 7.21135 10.5089 6.81671L9.82511 6.56368C9.61298 6.48518 9.44572 6.31793 9.36723 6.1058Z" stroke="#D7D7D7" strokeWidth=".45"/>
    <defs>
    <filter id="filter0_i_0_1" x="4.39697" y="4.39709" width="7.13672" height="7.29214" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="0.155172"/>
        <feGaussianBlur stdDeviation="0.775862"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
    </filter>
    </defs>
</svg>
);

interface SeparatorVerticalTopScrewProps {
    className?: string;
    addScrews: Array<String>;
}

const SeparatorVerticalTopScrew: React.FC<SeparatorVerticalTopScrewProps> = ({ className, addScrews }) => {
    const [activeDotIndex, setActiveDotIndex] = useState(-1);
    const [screwHighlighted, setScrewHightlighted] = useState(false)
    const [screwRotated, setScrewRotated] = useState(false)
    const squaresAmt = 18

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let currentIndex = -1;
    
        const cubicBezier = (t: number): number => {
            const c1 = 0.2;
            const c2 = 0.8;
            const c3 = 0.6;
            const c4 = 1;
          
            const t2 = t * t;
            const t3 = t2 * t;
          
            return c1 * t3 + c2 * t2 + c3 * t + c4;
        };

        const startPulse = () => {
            let direction = -1;
            let elapsedTime = 0;
            const duration = 3000;
            const progress = elapsedTime / duration;

            const easedProgress = cubicBezier(progress);
            const delay = 100 - easedProgress * 20;

            elapsedTime += delay;
            timer = setInterval(() => {
                setActiveDotIndex((prevIndex) => {
                    currentIndex = (prevIndex + direction + squaresAmt) % squaresAmt;
                    return currentIndex;
                });
        
                if (currentIndex === (direction === 1 ? squaresAmt - 1 : 0)) {
                    clearInterval(timer);
                    setActiveDotIndex(-1);
                    setScrewHightlighted(true)
                    Array.from(document.querySelectorAll('.rotate-screw')).forEach((el) => {
                        if (el instanceof SVGPathElement) {
                            let angleMatch = (el.style.getPropertyValue('transform').match(/\d+/))
                            let angle = angleMatch ? parseFloat(angleMatch[0]) : 0;
                            let turnTo = angle + 22.5 > 360 ? 0 : angle + 22.5
                            el.style.setProperty('transform', `rotate(${turnTo}deg)`)
                        }
                    })
                    elapsedTime = 0;
                    setTimeout(startPulse, 3000);
                  }
                }, delay);
        };
    
        startPulse();
    
        return () => {
          clearInterval(timer);
        };
      }, []);

    const addSquares = (count: number) => {
        const squares = [];
        for (let i = 0; i < count; i++) {
            const backgroundColor = i === activeDotIndex ? '#000000' : '#E8E8E8';
            squares.push(
                <div
                    key={i}
                    style={{ 
                        width: '2px', 
                        height: '2px', 
                        borderRadius: '2px',
                        backgroundColor,
                        marginBottom: '1px',
                        transition: 'all .2s ease-out'
                    }}
                ></div>
            );
        }
        return squares;
    };
    return (
        <div className={`flex flex-col gap-[.5px] items-center ${className}`}>
            {addScrews.includes('top') && <ScrewSVG screwHighlighted={screwHighlighted} />}
            {addSquares(squaresAmt)}
            {addScrews.includes('bottom') && <ScrewSVG screwHighlighted={screwHighlighted} />}
        </div>
    );
};

export default SeparatorVerticalTopScrew;