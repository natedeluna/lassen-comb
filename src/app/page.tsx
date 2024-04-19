"use client"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import { useEffect, useState, useRef } from "react";
import PriceCard from "@/app/components/price_card";
import Script from "next/script";

export default function Home() {
  const [highlightedWords, setHighlightedWords]:any = useState([]);
  const [prevWordIndex, setPrevWordIndex]:any = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasScale = .15
  function isMobileDevice() {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return mobileDeviceRegex.test(navigator.userAgent);
    }
    return false
  }

  const fadeInLogo = () => {
    let logoImg = document.querySelector('.logo-img-fade-in')
    let logoText = document.querySelector('#logo-text-fade-in')
    if (logoImg instanceof SVGElement) {
      logoImg.style.scale = '130%'
      logoImg.style.opacity = '100%'
    }
    const logoImgFadeInPromise = new Promise<void>((resolve) => {
      setTimeout(() => {
          resolve()
      }, 750)
    })
    logoImgFadeInPromise.then(() => {
      if (logoText instanceof HTMLElement && logoImg instanceof SVGElement) {
        let text = logoText.innerText
        logoText.innerText = ""
        Array.from(text.split("")).forEach((letter, index) => {
          let div = document.createElement('div')
            div.setAttribute('data-letter', letter.charCodeAt(0).toString())
            div.innerText = letter
            div.classList.add('fadeInLetter')
            div.style.animationDelay = `${index * 0.03}s`;
            div.style.animationDuration = `${.8 - (index * 0.02)}s`;
          logoText.appendChild(div)
        })
        logoText.style.width = "110px"
      }
    })
  }

  useEffect(() => {
    fadeInLogo()
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  
  const svgPath = "M130.86 87.4392C155.016 87.4392 174.234 68.2214 174.234 44.0653C174.234 19.9093 155.016 0.691406 130.86 0.691406C106.704 0.691406 87.4861 19.9093 87.4861 44.0653C87.4861 68.2214 68.2682 87.4392 44.1122 87.4392C19.9561 87.4392 0.738281 106.657 0.738281 130.813C0.738281 154.969 19.9561 174.187 44.1122 174.187C68.2682 174.187 87.4861 193.405 87.4861 217.561C87.4861 241.717 68.2682 260.935 44.1122 260.935C19.9773 260.959 0.738281 280.168 0.738281 304.309C0.738281 328.465 19.9561 347.683 44.1122 347.683C68.2682 347.683 87.4861 328.465 87.4861 304.309C87.4861 280.153 106.704 260.935 130.86 260.935C155.016 260.935 174.234 241.717 174.234 217.561C174.234 193.405 155.016 174.187 130.86 174.187C106.704 174.187 87.4861 154.969 87.4861 130.813C87.4861 106.657 106.704 87.4392 130.86 87.4392Z";
  return (
    <main className={`relative flex min-h-screen flex-col items-center ${isMobileDevice() ? "pt-[30px]" : "pt-[60px]"} max-w-[500px] mx-auto`}>
      <Badge
        isMobile={isMobileDevice()}
        texts={["Built to world standards", "Design subscription"]} 
        />
      <SeparatorVerticalTopScrew className="transform rotate-180 opacity-75"/>
      <section className="relative z-10 hero_1_title max-w-3xl mb-5 text-stone-800 flex flex-col self-start w-full">
      <div className="mt-2 relative flex items-center top-0 self-center">
        <div 
          style={{
            width: 500*canvasScale,
            height: 600*canvasScale,
          }}
          className= {`relative self-center  fadeIn`}  >
          <canvas 
            style={{
              scale: .15,
              position: "absolute",
              top: "0px",
              left: "0px",
              transformOrigin: "top left",
              margin: "auto 0px",
            }} 
            id="canvas1" willreadfrequently={"true"}>
          </canvas>
          <Script src="/scripts/raw_particle.js"/>
        </div>
        <div
          id="logo-text-fade-in"
          className={`
          relative
            transition-width
            duration-[1.1s]
            ease-out
            h-fit
            w-0
            whitespace-nowrap
            text-[20px]
            text-transparent
            `}>Lassen Comb</div>
      </div>
      {isMobileDevice() ? (
        <>
          Elevate your<br />
          brand with <br /> 
          world class design
        </>
      ):(
        <>Elevate your brand with world class design</>
      )}
      </section>
      <SeparatorVerticalTopScrew className="transform translate-y-[12px] rotate-0 opacity-75"/>
      <section className=" main-text w-[100%] relative">
        <br />
        <video className="w-full h-fit-content rounded-xl border-stone-100 border-[.1px] shadow-sm bg-stone-50" autoPlay muted loop>
          <source src="/images/reboot_reel.mp4" type="video/mp4" />
        </video>
        <img src="/images/lightning_alt.png" alt="hero_1" className=" w-24 inline mx-2 transform translate-y-[-5px]" />

        <PriceCard
          isMobile={isMobileDevice()}
          title="Subscription"
          price={4400}
          features={["start same day", "unlimited web, product, and brand design, one request "]}/>
      </section>
    </main>
  );
}
