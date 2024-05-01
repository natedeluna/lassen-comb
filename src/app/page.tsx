"use client"
import GradientBlur from "@/app/components/gradient_blur"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import PriceCard from "@/app/components/price_card";
import  CanvasAnimation from "@/app/components/canvas_animation";
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
      <Badge
        isMobile={isMobileDevice()}
        initialWidth={148}
        texts={["Design subscription", "Built to world standards"]}
        className=""
        />
      <SeparatorVerticalTopScrew addScrews={['bottom']} className="transform rotate-180 opacity-75"/>
      <section className="relative z-10 hero_1_title max-w-3xl mb-5 text-stone-800 flex flex-col self-start w-full">
        <CanvasAnimation />
        <HeroFadeIn/>
      </section>
      <section className=" main-text w-[100%] relative">
        <br />
        <TextScrollFade
          text={"We are a design studio"}
          triggerPoint="0px 0px -400px 0px"
          />
        <TextScrollFade
          text={"based out of Austin, TX."}
          triggerPoint="0px 0px -400px 0px"
          />
        <br />
        <br />
        <TextScrollFade
          text={"We partner with marketing"}
          triggerPoint="0px 0px -400px 0px"
          />
        <TextScrollFade
          text={" agencies, startups, and"}
          triggerPoint="0px 0px -400px 0px"
          />
        <TextScrollFade
          text={"venture capital firms to deliver"}
          triggerPoint="0px 0px -400px 0px"
          />
        <TextScrollFade
          text={"powerful visual messages"}
          triggerPoint="0px 0px -400px 0px"
          />
        <div className="relative flex justify-center mt-[50px]">
          <Badge
            isMobile={isMobileDevice()}
            texts={["Recent work"]}
            initialWidth={100}
            className=""
          />

        </div>
        <SeparatorVerticalTopScrew addScrews={['top']} className="transform translate-y-[12px] rotate-0 opacity-75"/>
        <ParallaxShowcase className="mt-[10vw]"/>
        <PriceCard/>
      </section>
      <GradientBlur/>
    </main>
  );
}
