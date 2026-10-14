import Header from "@/components/home/Header";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProjects from "@/components/home/Projects";
import AboutUs from "@/components/home/AboutUs";
import SupportCompany from "@/components/home/support-our-company";
import { ParallaxScroll } from "@/components/home/parallax-scroll";
import clientText from "@/data/client-text.json";

export default function Home() {
  return (
    <div className="space-y-16">
      <Header />
      <Stats />
      <Services />
      <WhyChooseUs />
      <OurProjects />
      <AboutUs />
      <SupportCompany />
      <ParallaxScroll clientsText={clientText} />
    </div>
  );
}
