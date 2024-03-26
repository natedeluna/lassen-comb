"use client"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import ScrollTextAppear from "@/app/components/scroll_text_appear";
import { useEffect } from "react";

export default function Home() {
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    console.log("Scroll Height:", scrollHeight);
    const scrollTop = document.documentElement.scrollTop;
    console.log("Scroll Top:", scrollTop+window.innerHeight);
    // Perform your calculations with the scroll top here
    // Perform your calculations with the scroll height here
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center pt-[60px] max-w-[500px] mx-auto">
      <Badge 
        texts={["Built to world standards", "Design subscription"]} 
        color="whitesmoke" />
      <SeparatorVerticalTopScrew className="transform rotate-180 opacity-75"/>
      <h1 className="hero_1_title max-w-3xl my-1">Lassen comb<br/>A design supplier based out of Austin, TX
      </h1>
      <SeparatorVerticalTopScrew className="transform translate-y-[12px] rotate-0 opacity-75"/>
      <section className="text-stone-300 scrollForOpacity">
        <br />
        <div>
          Here's some of my work
          <video className="w-full h-fit-content rounded-xl border-stone-300 border-[.1px] shadow-sm bg-stone-50" autoPlay muted loop>
            <source src="/images/reboot_reel.mp4" type="video/mp4" />
            video not supported
          </video>
          
        </div>
        <div>
          From the abstract to the concrete:
          <span>
            <img src="/images/lightning.png" alt="hero_1" className=" w-14 inline mx-2" />
          </span>
          a holistic approach to crafting a powerful aesthetics language.
        </div>
      <div className="my-12"></div>
      </section>
    </main>
  );
}
