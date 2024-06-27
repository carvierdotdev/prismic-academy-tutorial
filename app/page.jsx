import CallToActionButton from "@/components/CallToActionButton";
import Hero from "@/components/Hero";
import SplitButtonLeft from "@/components/SplitButtonLeft";
import SplitImageLeft from "@/components/SplitImageLeft";
import TextCenter from "@/components/TextCenter";
import { createClient } from "@/prismicio";

const queryHomepage = () => {
  const client = createClient();
  return client.getSingle("homepage");
};

export async function generateMetadata() {
  const page = await queryHomepage();

  return {
    title: "EIE - Engineering Intelligent Environments",
    description:
      "Farming solutions start-up that aims to revolutionize the way farmers work.",
  };
}

export default async function Home() {
  const page = await queryHomepage();
  console.log(page);

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
