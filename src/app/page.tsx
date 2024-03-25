import Badge from "@/app/components/badge";
import SeparatorVerticalTopScrew from "./components/separator_vertical_top_screw";
import ScrollTextAppear from "@/app/components/scroll_text_appear";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[60px] max-w-[500px] mx-auto">
      <Badge 
        texts={["Built to world standards", "Design subscription"]} 
        color="whitesmoke" />
      <SeparatorVerticalTopScrew className="transform rotate-180 opacity-75"/>
      <h1 className="hero_1_title max-w-3xl my-1">Lassen comb<br/>A design supplier based out of Austin, TX
      </h1>
      <SeparatorVerticalTopScrew className="transform translate-y-[12px] rotate-0 opacity-75"/>
      <section>
        <ScrollTextAppear>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            We are a design supplier based out of Austin, TX. We offer a wide range of design services to help you with your project. We have a team of experienced designers who can help you with any design project you have. Whether you need a logo, website, or any other design service, we can help. Contact us today to learn more about our design services and how we can help you with your project.
          </div>
          <img src="/images/lightning.png" alt="hero_1" className="my-5 w-14" />
          <br />
          <br />
          <br />
          <br />
          <div>
            We are a design supplier based out of Austin, TX. We offer a wide range of design services to help you with your project. We have a team of experienced designers who can help you with any design project you have. Whether you need a logo, website, or any other design service, we can help. Contact us today to learn more about our design services and how we can help you with your project.
          </div>
          <div>
            From the abstract to the concrete: a holistic approach to crafting powerful digital experiences.
          </div>
        </ScrollTextAppear>
        <div className="my-12"></div>
      </section>
    </main>
  );
}
