import Image from "next/image";
import Badge from "@/app/components/badge";
import ScrollTextAppear from "@/app/components/scroll_text_appear";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[120px] max-w-[500px] mx-auto">
      <Badge texts={["Design subscription", "Available"]} color="whitesmoke" />
      <h1 className="hero_1_title max-w-3xl">Design supplier based out of Austin, TX
      </h1>
      <section>
        <div className="my-12"></div>
        <ScrollTextAppear 
          text="We use a crossfunctional approach of design and engineering to craft timeless and powerful aesthetics.
                " 
          />
        <div className="my-12"></div>
      </section>
    </main>
  );
}
