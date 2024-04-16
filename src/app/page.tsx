"use client"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import { useEffect, useState, useRef } from "react";
import PriceCard from "@/app/components/price_card";

export default function Home() {
  const [highlightedWords, setHighlightedWords]:any = useState([]);
  const [prevWordIndex, setPrevWordIndex]:any = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center pt-[60px] max-w-[500px] mx-auto">
      <Badge 
        texts={["Built to world standards", "Design subscription"]} 
        color="whitesmoke" />
      <SeparatorVerticalTopScrew className="transform rotate-180 opacity-75"/>
      <section className="relative z-10 hero_1_title max-w-3xl my-1 text-stone-800 flex flex-col gap-1 self-start w-full">
        Elevate your brand with world class design
      </section>
      <SeparatorVerticalTopScrew className="transform translate-y-[12px] rotate-0 opacity-75"/>
      <section className=" main-text w-[100%] relative">
        <br />
        <video className="w-full h-fit-content rounded-xl border-stone-100 border-[.1px] shadow-sm bg-stone-50" autoPlay muted loop>
          <source src="/images/reboot_reel.mp4" type="video/mp4" />
        </video>
        <img src="/images/lightning_alt.png" alt="hero_1" className=" w-24 inline mx-2 transform translate-y-[-5px]" />
        <PriceCard
          title="Subscription"
          price={4400}
          features={["start same day", "unlimited web, product, and brand design, one request "]}/>
      </section>
    </main>
  );
}
