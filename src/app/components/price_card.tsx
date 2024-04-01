import React from 'react';

interface PriceCardProps {
    title: string;
    price: number;
    features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features }) => {
    return (
        <div 
            className="
                price-card
                bg-stone-50 
                border-stone-300 
                border-[.5px]
                rounded-2xl
                w-full
                shadow-lg
                ">
            <h2>{title}</h2>
            <h3>${price}</h3>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div
            style={{
                boxShadow:`inset 0px -2.5px 0 1px #737373`,
            }}
            className='
                relative 
                flex 
                flex-col 
                text-stone-50 
                bg-stone-800
                border-stone-300 
                border-[.5px]
                rounded-full
                items-center 
                justify-center 
                py-8
                h-[30px]
                w-[calc(100%-3rem)]
                mx-auto
                my-5  
                transition-width 
                duration-500 
                ease-in-out
                cursor-pointer
                transition-opacity 
                text-nowrap
                text-[25px]

                select-none
            '><span className=' relative transform translate-y-[-2px]'>Start Now</span></div>
        </div>
    );
};

export default PriceCard;