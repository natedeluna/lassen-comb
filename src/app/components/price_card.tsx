import React from 'react';

interface PriceCardProps {
    className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({className}) => {
    return (
        <div
            id='price-card'
            style={{
                background: "white",
            }}
            className={`
                ${className}
                p-[16px]
                left-[50%]
                transform
                translate-x-[-50%]
                border-[.5px]
                shadow-[0px 2px 6.8px rgba(45, 255, 41, 0.34)]
                border-[#00000020]
                relative
                shadow-sm
                rounded-2xl
                w-[350px]
                mb-10
            `}
            >
            <div className='flex flex-col gap-7'>
                <svg className='absolute left-1/2 top-0 transform translate-x-[-50%] scale-50' width="133" height="45" viewBox="0 0 133 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M117.922 14.3448C126.25 14.3448 133 21.0953 133 29.4224V29.4224C133 37.7495 126.25 44.5 117.922 44.5H15.0776C6.75047 44.5 0 37.7495 0 29.4224V29.4224C0 21.0953 6.75046 14.3448 15.0776 14.3448H30.4782C37.5607 14.3448 44.4074 11.7993 49.7698 7.17241L51.7091 5.49911C55.8204 1.95166 61.0698 0 66.5 0V0V0C72.4733 0 78.2476 2.14682 82.77 6.04902L84.072 7.17241C89.4343 11.7993 96.281 14.3448 103.364 14.3448H117.922Z" fill="#FBFBFD"/>
                <path d="M103.364 14.5948H117.922C126.111 14.5948 132.75 21.2334 132.75 29.4224C132.75 37.6115 126.111 44.25 117.922 44.25H15.0776C6.88854 44.25 0.25 37.6115 0.25 29.4224C0.25 21.2334 6.88854 14.5948 15.0776 14.5948H30.4782C37.6207 14.5948 44.5253 12.0278 49.9331 7.36169L51.8724 5.68839C55.9383 2.18011 61.1297 0.25 66.5 0.25C72.4133 0.25 78.1296 2.37527 82.6067 6.2383L83.9087 7.36169C89.3164 12.0278 96.2211 14.5948 103.364 14.5948Z" stroke="black" strokeOpacity="0.23" strokeWidth="0.5"/>
                </svg>





                <div id='meta-details' className='mt-5'>
                    <div className='text-[20px] font-medium text-[#0f0f0f]'>
                        Scale
                    </div>
                    <div className='text-[14px] font-medium text-[#afafaf]'>
                        Ideal for fast-growing startups or agencies
                    </div>
                </div>

                <div id='price-details'>
                    <div className='h-1 w-full flex gap-[2px] justify-start'>
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
                    <div className='flex gap-[8px] items-center my-3'>
                        <div className='text-[40px]  font-[Haskoy-semi] '>$3,400</div>
                        <div className='text-[14px] font-medium text-[#afafaf]'>per month</div>
                    </div>
                    <div className='h-1 w-full flex gap-[2px] justify-start'>
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
                </div>

                <div id='features' className=' flex flex-col gap-3 text-[#3d3d3d] text-[Haskoy-med] text-[20px]'>
                    <div className='flex'>
                        <div className='w-[32px] flex'>
                            <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#f700ff" fillOpacity="0.2"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                            </svg>
                        </div>
                        <div>1 request at a time</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[32px] flex'>
                            <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#f700ff" fillOpacity="0.2"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                            </svg>
                        </div>
                        <div>Product, web, and brand design</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[32px] flex'>
                            <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#f700ff" fillOpacity="0.2"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                            </svg>
                        </div>
                        <div>Cancel or pause anytime</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[32px] flex'>
                            <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#f700ff" fillOpacity="0.2"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                            </svg>
                        </div>
                        <div>Unlimited revisions</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[32px] flex'>
                            <svg className="my-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#f700ff" fillOpacity="0.2"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.145 7.44504C12.4364 7.08884 12.3839 6.56382 12.0277 6.27238C11.6715 5.98094 11.1465 6.03344 10.855 6.38964L7.68814 10.2603L6.67259 9.2448C6.34715 8.91932 5.81951 8.91932 5.49408 9.2448C5.16864 9.5702 5.16864 10.0978 5.49408 10.4233L7.16074 12.0899C7.32723 12.2564 7.55636 12.3447 7.79151 12.333C8.02666 12.3212 8.24587 12.2106 8.39496 12.0284L12.145 7.44504Z" fill="#131313"/>
                            </svg>
                        </div>
                        <div>48 hour delivery</div>
                    </div>
                </div>

                <div id='button-stripe'
                    className='flex gap-3 mx-auto w-full'>
                    <div
                        className='
                            relative 
                            text-stone-50 
                            rounded-[12px]
                            flex
                            bg-[black]
                            flex-col
                            w-full
                            h-[52px]
                            text-center
                            justify-center
                            transition-width 
                            duration-500 
                            ease-in-out
                            cursor-pointer
                            transition-opacity 
                            text-nowrap
                            text-[18px]
                            select-none
                            font-[Haskoy]
                            font-[550]
                        '><span className=' relative transform'>Start Now</span>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default PriceCard;