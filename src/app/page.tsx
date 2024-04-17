"use client"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import { useEffect, useState, useRef } from "react";
import PriceCard from "@/app/components/price_card";
import Logo from "@/app/components/logo"

export default function Home() {
  const [highlightedWords, setHighlightedWords]:any = useState([]);
  const [prevWordIndex, setPrevWordIndex]:any = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      }, 2250)
    })
    logoImgFadeInPromise.then(() => {
      if (logoText instanceof HTMLElement && logoImg instanceof SVGElement) {
        let text = logoText.innerText
        logoText.innerText = ""
        Array.from(text.split("")).forEach((letter, index) => {
          let div = document.createElement('div')
          if (letter !== " ") {
            div.innerText = letter
            // for tight animation timing
            div.classList.add('fadeInLetter')
            div.style.animationDelay = `${index * 0.03}s`;
            div.style.animationDuration = `${.8 - (index * 0.02)}s`;
          } else {
            div.innerText = `\u200a`+ `\u200a`
          }
  
          logoText.appendChild(div)
        })
        logoText.style.width = "120px"
      }
    })
  }

  useEffect(() => {
    fadeInLogo()
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

  }, []);

  return (
    <main className={`relative flex min-h-screen flex-col items-center ${isMobileDevice() ? "pt-[30px]" : "pt-[60px]"} max-w-[500px] mx-auto`}>
      <Badge
        isMobile={isMobileDevice()}
        texts={["Built to world standards", "Design subscription"]} 
        />
      <SeparatorVerticalTopScrew className="transform rotate-180 opacity-75"/>
      <section className="relative z-10 hero_1_title max-w-3xl my-1 text-stone-800 flex flex-col gap-1 self-start w-full">
      <div className="mt-2 relative flex items-center top-0 self-center">
        <Logo className="inline-block logo-img-fade-in mr-2 opacity-0 duration-[1s] scale-[80%] transition-all ease" />
        <div
          id="logo-text-fade-in"
          className={`
          relative
            transition-width
            duration-[1.8s]
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
