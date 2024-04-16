import React from 'react';

interface PriceCardProps {
    title: string;
    price: number;
    features: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, features }) => {
    return (
        <div
            style={{
                background: "white",
            }}
            className="
                p-[16px]
                left-[50%]
                transform
                translate-x-[-50%]
                border-[1px]
                shadow-[0px 2px 6.8px rgba(45, 255, 41, 0.34)]
                border-[#00000020]
                relative
                price-card
                shadow-sm
                rounded-[24px]
                w-[325px]
                mb-10
                ">
            <div className='text-[20px] font-medium text-[#0f0f0f]'>
                Scale
            </div>
            <div className='text-[14px] font-medium text-[#afafaf]'>
                Ideal for fast-growing startups or agencies
            </div>
            <div className=' my-3 h-1 w-full flex gap-[2px] justify-start'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
            <div className='flex gap-[8px] items-center'>
                <div className='text-[40px]  font-[Haskoy-semi] '>$3,400</div>
                <div className='text-[14px] font-semibold text-[#AAAAAA]'>per month</div>
            </div>
            <div className=' my-3 h-1 w-full flex gap-[2px] justify-start'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
            <div className='text-[20px] font-medium text-[#0f0f0f]'>
                Included
            </div>
            <div className=' flex flex-col gap-3 text-[#666D7F] text-[Haskoy-med] text-[18px] mt-3'>
                <div className='flex'>
                    <div className='w-[32px] flex'>
                        <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#00FF1A" fill-opacity="0.2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                        </svg>
                    </div>
                    <div>1 request at a time</div>
                </div>
                <div className='flex'>
                    <div className='w-[32px] flex'>
                        <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#00FF1A" fill-opacity="0.2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                        </svg>
                    </div>
                    <div>Product, web, and brand design</div>
                </div>
                <div className='flex'>
                    <div className='w-[32px] flex'>
                        <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#00FF1A" fill-opacity="0.2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                        </svg>
                    </div>
                    <div>Cancel or pause anytime</div>
                </div>
                <div className='flex'>
                    <div className='w-[32px] flex'>
                        <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#00FF1A" fill-opacity="0.2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                        </svg>
                    </div>
                    <div>Unlimited revisions</div>
                </div>
                <div className='flex'>
                    <div className='w-[32px] flex'>
                        <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#00FF1A" fill-opacity="0.2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                        </svg>
                    </div>
                    <div>48 hour delivery</div>
                </div>
                </div>

            <div className='flex gap-3 pt-10 pb-7  mx-auto'>
                <div
                style={{
                }}
                className='
                    relative 
                    text-stone-50 
                    rounded-[24px]
                    flex
                    bg-[black]
                    flex-col
                    w-[136px]
                    h-[40px]
                    text-center
                    justify-center
                    transition-width 
                    duration-500 
                    ease-in-out
                    cursor-pointer
                    transition-opacity 
                    text-nowrap
                    text-[14px]
                    select-none
                    font-[Haskoy]
                    font-[550]
                '><span className=' relative transform'>Start Now</span>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;