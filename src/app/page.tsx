"use client"
import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [highlightedWords, setHighlightedWords]:any = useState([]);
  const [prevWordIndex, setPrevWordIndex]:any = useState(0);
  const wordRefs = useRef<(HTMLElement | null)[]>([]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
  };

  let textBody:string = 
    "Heres some text to scroll through, and some more text to scroll through,"+
    "Limsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor"+
    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"+
    "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "+
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "+
    "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt "+
    "in culpa qui officia deserunt mollit anim id est laborum.";

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
      <section className="hero_1_title max-w-3xl my-1 text-stone-800 flex flex-col items-center">
        <div className=" w-fit h-[64px]">
          <img src="/images/lassen_comb.png" alt="hero_1" className=" w-[73px] inline mx-2 transform translate-y-[-5px]" />
          Lassen comb
        </div>
        <div className="text-stone-500 w-fit h-[64px]">
          A <span className="rainbow-text">design supplier</span> based
        </div>
        <div className="w-fit h-[64px]">
          out of <span className="text-stone-800">Austin, TX</span>
          <img src="/images/map.png" alt="hero_1" className=" w-24 inline mx-2 transform translate-y-[-5px]" />
        </div>
      </section>
      <SeparatorVerticalTopScrew className="transform translate-y-[12px] rotate-0 opacity-75"/>
      <section className="text-stone-300 scrollForOpacity main-text w-[100%] relative">
        <br />
        <video className="w-full h-fit-content rounded-xl border-stone-300 border-[.1px] shadow-sm bg-stone-50" autoPlay muted loop>
          <source src="/images/reboot_reel.mp4" type="video/mp4" />
        </video>
        <img src="/images/lightning_alt.png" alt="hero_1" className=" w-24 inline mx-2 transform translate-y-[-5px]" />
        {
          textBody.split(" ").map((word, index:any) => {
            return (
              <span
                key={index} 
                ref={ref => (wordRefs.current[index] = ref)} 
                className={highlightedWords.includes(index) ? 'highlight' : 'text-stone-400'}>
                  {word + " "} 
              </span>
            );
          })
        }
      </section>
    </main>
  );
}
