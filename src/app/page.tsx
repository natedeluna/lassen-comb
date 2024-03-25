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
        <ScrollTextAppear>
          <div>
            We are a design supplier based out of Austin, TX. We offer a wide range of design services to help you with your project. We have a team of experienced designers who can help you with any design project you have. Whether you need a logo, website, or any other design service, we can help. Contact us today to learn more about our design services and how we can help you with your project.
          </div>
          <div>
            We are a design supplier based out of Austin, TX. We offer a wide range of design services to help you with your project. We have a team of experienced designers who can help you with any design project you have. Whether you need a logo, website, or any other design service, we can help. Contact us today to learn more about our design services and how we can help you with your project.
          </div>
          <div>
            We are a design supplier based out of Austin, TX. We offer a wide range of design services to help you with your project. We have a team of experienced designers who can help you with any design project you have. Whether you need a logo, website, or any other design service, we can help. Contact us today to learn more about our design services and how we can help you with your project.
          </div>
          <div>
            We are a design supplier based out of Austin, TX. We offer a wide range of design services to help you with your project. We have a team of experienced designers who can help you with any design project you have. Whether you need a logo, website, or any other design service, we can help. Contact us today to learn more about our design services and how we can help you with your project.
          </div>
          <div>
            We are a design supplier based out of Austin, TX. We offer a wide range of design services to help you with your project. We have a team of experienced designers who can help you with any design project you have. Whether you need a logo, website, or any other design service, we can help. Contact us today to learn more about our design services and how we can help you with your project.
          </div>
        </ScrollTextAppear>
        <div className="my-12"></div>
      </section>
    </main>
  );
}
