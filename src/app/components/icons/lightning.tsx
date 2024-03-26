import React from 'react';

const LightningIcon: React.FC = () => {
    return (
        <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ii_978_956)">
                <rect width="50" height="37" rx="12" fill="url(#paint0_linear_978_956)"/>
            </g>
            <rect x="0.75" y="0.75" width="48.5" height="35.5" rx="11.25" stroke="url(#paint1_angular_978_956)" stroke-width="1.5"/>
            <g filter="url(#filter1_d_978_956)">
                <path d="M15.8524 17.8664L20.0493 10.5047C20.2272 10.1927 20.5589 10 20.9181 10H29.717C30.4844 10 30.9658 10.8286 30.5858 11.4953L28.7697 14.6809H31.7682C32.6318 14.6809 33.0893 15.7019 32.5145 16.3465L22.3183 27.7786C21.6803 28.494 20.4985 27.9885 20.5752 27.033L21.191 19.3617H16.7212C15.9538 19.3617 15.4724 18.5331 15.8524 17.8664Z" fill="#F4F4F4"/>
                <path d="M15.8524 17.8664L20.0493 10.5047C20.2272 10.1927 20.5589 10 20.9181 10H29.717C30.4844 10 30.9658 10.8286 30.5858 11.4953L28.7697 14.6809H31.7682C32.6318 14.6809 33.0893 15.7019 32.5145 16.3465L22.3183 27.7786C21.6803 28.494 20.4985 27.9885 20.5752 27.033L21.191 19.3617H16.7212C15.9538 19.3617 15.4724 18.5331 15.8524 17.8664Z" stroke="url(#paint2_angular_978_956)" stroke-width="1.5"/>
            </g>
            <defs>
                <filter id="filter0_ii_978_956" x="0" y="-3" width="50" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.27 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_978_956"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-3"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.925437 0 0 0 0 0.450098 0 0 0 0 1 0 0 0 0.97 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow_978_956" result="effect2_innerShadow_978_956"/>
                </filter>
                <filter id="filter1_d_978_956" x="10.9688" y="9.25" width="26.5527" height="27.6178" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.940774 0 0 0 0 0.585417 0 0 0 0 1 0 0 0 0.57 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_978_956"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_978_956" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_978_956" x1="25" y1="0" x2="25" y2="37" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FBE3FF"/>
                    <stop offset="1" stopColor="#E897F6"/>
                </linearGradient>
                <radialGradient id="paint1_angular_978_956" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 18.5) rotate(90) scale(18.5 25)">
                    <stop offset="0.11" stopColor="#EA67FF"/>
                    <stop offset="0.395" stopColor="#F7C3FF"/>
                    <stop offset="0.58" stopColor="#F8C8FF"/>
                    <stop offset="0.845" stopColor="#E95BFF"/>
                </radialGradient>
                <radialGradient id="paint2_angular_978_956" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.5 20) rotate(90) scale(9.5 9.025)">
                    <stop offset="0.125587" stopColor="#EDA1F8"/>
                    <stop offset="0.427578" stopColor="#F1BBFB"/>
                    <stop offset="0.558162" stopColor="#F6BDFE"/>
                    <stop offset="0.864626" stopColor="#F091FF"/>
                </radialGradient>
            </defs>
        </svg>
    );
};

export default LightningIcon;