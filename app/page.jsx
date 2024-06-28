import CallToActionButton from "@/components/CallToActionButton";
import Hero from "@/components/Hero";
import SplitButtonLeft from "@/components/SplitButtonLeft";
import SplitImageLeft from "@/components/SplitImageLeft";
import TextCenter from "@/components/TextCenter";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

const queryHomepage = () => {
  const client = createClient();
  return client.getSingle("homepage");
};

export async function generateMetadata() {
  const page = await queryHomepage();

  // Revolutionizing farming solutions. -> OG Description (OLD)
  // Farming solutions start-up that aims to revolutionize the way farmers work. -> OG Description (ACTUAL in PRISMIC Editor)

  return {
    title: "Future of Farming",
    description: "A mission to transform agriculture for the future",
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: prismic.asImageSrc(page.data.meta_image),
    },
  };
}

export default async function Home() {
  const page = await queryHomepage();
  console.log("---------------------PAGE---------------------");
  console.log(page);
  console.log("---------------------PAGE.DATA---------------------");
  console.log(page.data);
  console.log("---------------------PAGE.DATA.SLICES---------------------");
  console.log(page.data.slices);

  return (
    <main>
      <Hero />
      <CallToActionButton />
      <SplitImageLeft />
      <SplitButtonLeft />
      <TextCenter />
    </main>
  );
}
