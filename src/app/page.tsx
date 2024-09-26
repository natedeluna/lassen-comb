"use client"
import GradientBlur from "@/app/components/gradient_blur"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import { PriceCard } from "@/app/components/price-card";
import { LogoParticles } from "@/app/components/logo-particle";
import ParallaxShowcase from "./components/parallax_showcase";
import HeroFadeIn from "@/app/components/hero_fade_in"
import TextScrollFade from "@/app/components/text_scroll_fade";

export default function Home() {
  function isMobileDevice() {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return mobileDeviceRegex.test(navigator.userAgent);
    }
    return false
  }

  

  return (
    <main className={`relative flex min-h-screen flex-col items-center ${isMobileDevice() ? "pt-[30px]" : "pt-[60px]"} max-w-[500px] > :not(.fullWidthOverride) mx-auto`}>
      <GradientBlur className={"top-[-2px] bottom-auto transform rotate-180"}/>
      {/* <Badge
        isMobile={isMobileDevice()}
        initialWidth={148}
        texts={["Design subscription", "Built to world standards"]}
        className=""
        /> */}
      <section className="relative z-10 hero_1_title max-w-3xl mb-5 text-stone-800 flex flex-col self-start w-full">
        <LogoParticles />
        <br />
        <br />
        <HeroFadeIn/>
      </section>
      <section className=" main-text w-[100%] relative">
        <br />
        <br />
        <br />
        <TextScrollFade
          text={"We are a design studio"}
          triggerPoint="0px 0px -300px 0px"
          />
        <TextScrollFade
          text={"based out of Austin, TX."}
          triggerPoint="0px 0px -280px 0px"
          />
        <br />
        <br />
        <TextScrollFade
          text={"We partner with"}
          triggerPoint="0px 0px -280px 0px"
          />
        <TextScrollFade
          text={"marketing agencies,"}
          triggerPoint="0px 0px -280px 0px"
          />
        <TextScrollFade
          text={"startups, and venture capital firms to deliver"}
          triggerPoint="0px 0px -280px 0px"
          />
        <TextScrollFade
          text={"powerful visual messages"}
          triggerPoint="0px 0px -280px 0px"
          />
        <br />
        <br />
        <br />
        <div className="relative flex justify-center mt-[50px]">
          <Badge
            isMobile={isMobileDevice()}
            texts={["Recent work"]}
            initialWidth={100}
            className=""
          />

        </div>
        <ParallaxShowcase className="mt-[10vw]"/>
        <br />  
        <br />  
        <br />  
        <PriceCard
          className="hover:shadow-lg transition-all duration-500 "
          title="Scale"
          description="Ideal for fast-growing startups or agencies"
          price="$3,400"
          frequency="per month"
          features={["1 request at a time", "100% satisfaction guarantee", "24/7 support"]}
        />
      </section>
      <br />  
      <br />  
      <br />  
      <br />  
      <br />  
      <br />  
      <div className="font-[DeFontePlus-Leger] tracking-wide text-[14px]  text-slate-700">** Design the world with intention **</div>
      <br />  
      <br />  
      <br />
      <GradientBlur className={"bottom-[-2px] top-auto"}/>
    </main>
  );
}
