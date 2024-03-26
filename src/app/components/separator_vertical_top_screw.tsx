import React from 'react';
interface SeparatorVerticalTopScrewProps {
    className?: string;
  }

const SeparatorVerticalTopScrew: React.FC<SeparatorVerticalTopScrewProps> = ({ className }) => {
    return (
        <svg className={className} width="16" height="71" viewBox="0 0 16 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8" y1="14" x2="8" y2="71" stroke="url(#paint0_linear_999_963)" strokeOpacity="0.15" strokeWidth="1.5"/>
            <path d="M13.9312 7.9827C13.9312 11.2678 11.2681 13.931 7.98294 13.931C4.6978 13.931 2.03467 11.2678 2.03467 7.9827C2.03467 4.69756 4.6978 2.03442 7.98294 2.03442C11.2681 2.03442 13.9312 4.69756 13.9312 7.9827Z" fill="white"/>
            <path d="M7.98294 14.7068C11.6966 14.7068 14.7071 11.6963 14.7071 7.9827C14.7071 4.26906 11.6966 1.25856 7.98294 1.25856C4.2693 1.25856 1.25881 4.26906 1.25881 7.9827C1.25881 11.6963 4.2693 14.7068 7.98294 14.7068Z" stroke="#969595" strokeOpacity="0.43" strokeWidth="1.55172"/>
            <g filter="url(#filter0_i_999_963)">
            <path d="M7.06215 5.53451C7.38431 4.66389 8.61569 4.66389 8.93785 5.53451L9.19088 6.2183C9.29217 6.49202 9.50798 6.70783 9.7817 6.80912L10.4655 7.06215C11.3361 7.38431 11.3361 8.61569 10.4655 8.93785L9.7817 9.19088C9.50798 9.29217 9.29217 9.50798 9.19088 9.7817L8.93785 10.4655C8.61569 11.3361 7.38431 11.3361 7.06215 10.4655L6.80912 9.7817C6.70783 9.50798 6.49202 9.29217 6.2183 9.19088L5.53451 8.93785C4.66389 8.61569 4.66389 7.38431 5.53451 7.06215L6.2183 6.80912C6.49202 6.70783 6.70783 6.49202 6.80912 6.2183L7.06215 5.53451Z" fill="#F1EFEE"/>
            </g>
            <path d="M9.4019 6.14022L9.14887 5.45642C8.75423 4.38992 7.24577 4.38992 6.85113 5.45642L6.5981 6.14022C6.51961 6.35235 6.35235 6.51961 6.14022 6.5981L5.45642 6.85113C4.38992 7.24577 4.38992 8.75423 5.45642 9.14887L6.14022 9.4019C6.35235 9.48039 6.51961 9.64765 6.5981 9.85978L6.85113 10.5436C7.24577 11.6101 8.75423 11.6101 9.14887 10.5436L9.4019 9.85978C9.48039 9.64765 9.64765 9.48039 9.85978 9.4019L10.5436 9.14887C11.6101 8.75423 11.6101 7.24577 10.5436 6.85113L9.85978 6.5981C9.64765 6.51961 9.48039 6.35235 9.4019 6.14022Z" stroke="#A3A2A2" strokeWidth="0.45"/>
            <defs>
            <filter id="filter0_i_999_963" x="4.43164" y="4.43152" width="7.13672" height="7.29214" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.155172"/>
            <feGaussianBlur stdDeviation="0.775862"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_999_963"/>
            </filter>
            <linearGradient id="paint0_linear_999_963" x1="6.75" y1="14" x2="6.75" y2="71" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8000FF"/>
            <stop offset="0.98" stopColor="#00FFFF"/>
            </linearGradient>
            </defs>
        </svg>
    );
};

export default SeparatorVerticalTopScrew;