"use client"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import { useEffect, useState, useRef } from "react";
import PriceCard from "@/app/components/price_card";
import Script from "next/script";
import  CanvasAnimation from "@/app/components/canvas_animation";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasScale = .15
  function isMobileDevice() {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return mobileDeviceRegex.test(navigator.userAgent);
    }
    return false
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  

  return (
    <main className={`relative flex min-h-screen flex-col items-center ${isMobileDevice() ? "pt-[30px]" : "pt-[60px]"} max-w-[500px] mx-auto`}>
      <Badge
        isMobile={isMobileDevice()}
        texts={["Design subscription", "Built to world standards"]} 
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
              <CanvasAnimation />
          </div>
        </div>
        <div className="inline hero_1_title">
          Elevate<br className="inline sm:hidden" /> your brand with
            <br className="inline sm:hidden" /> world class design
        </div>
      </section>
      <SeparatorVerticalTopScrew className="transform translate-y-[12px] rotate-0 opacity-75"/>
      <section className=" main-text w-[100%] relative">

        <br />
        <br />
        <br />
        <br />
        <br />

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
