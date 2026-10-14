import Hero from "@/components/site/Hero";
import Manifesto from "@/components/site/Manifesto";
import Marquee from "@/components/site/Marquee";
import Crisis from "@/components/site/Crisis";
import Approach from "@/components/site/Approach";
import Programs from "@/components/site/Programs";
import Impact from "@/components/site/Impact";
import Give from "@/components/site/Give";
import Closing from "@/components/site/Closing";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Crisis />
      <Marquee />
      <Approach />
      <Programs />
      <Impact />
      <Give />
      <Closing />
    </>
  );
}
