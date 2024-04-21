"use client"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import PriceCard from "@/app/components/price_card";
import  CanvasAnimation from "@/app/components/canvas_animation";
import ParallaxShowcase from "./components/parallax_showcase";
import HeroFadeIn from "@/app/components/hero_fade_in"

export default function Home() {
  const canvasScale = .15
  function isMobileDevice() {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return mobileDeviceRegex.test(navigator.userAgent);
    }
    return false
  }

  

  return (
    <main className={`relative flex min-h-screen flex-col items-center ${isMobileDevice() ? "pt-[30px]" : "pt-[60px]"} max-w-[500px] > :not(.fullWidthOverride) mx-auto`}>
      <Badge
        isMobile={isMobileDevice()}
        texts={["Design subscription", "Built to world standards"]} 
        />
      <SeparatorVerticalTopScrew addScrews={['bottom']} className="transform rotate-180 opacity-75"/>
      <section className="relative z-10 hero_1_title max-w-3xl mb-5 text-stone-800 flex flex-col self-start w-full">
        <div className="mt-2 relative flex items-center top-0 self-center">
          <div style={{ width: 500*canvasScale, height: 600*canvasScale,  }}  className= {`relative self-center  fadeIn`}  >
              <CanvasAnimation />
          </div>
        </div>
        <HeroFadeIn/>
      </section>
      <SeparatorVerticalTopScrew addScrews={['top','bottom']} className="transform translate-y-[12px] rotate-0 opacity-75"/>
      <section className=" main-text w-[100%] relative">

        <div className=" text-[24px] font-[Haskoy] font-[400] text-center text-[#383838] my-12 px-10 sm:px-0">
          We are a design studio based out of Austin, TX. 
          We partner with marketing agencies, startups, and venture capital firms 
          to deliver powerful visual messages
        </div>

        <ParallaxShowcase/>

        <img src="/images/lightning_alt.png" alt="hero_1" className=" w-24 inline mx-2 transform translate-y-[-5px]" />

        <PriceCard/>
      </section>
    </main>
  );
}
