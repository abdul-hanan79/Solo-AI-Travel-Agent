import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import PoweredSection from "@/components/shared/pageSection/homePageSection/PoweredSection";
import ToolSection from "@/components/shared/pageSection/homePageSection/ToolSection";
import MouseCursor from "@/components/template/MouseCursor";

export default function Home() {
  return (
    <div className="bg-white h-full w-full  mx-auto py-14">
      <MouseCursor />
      <HeroSection />
      <PoweredSection />
      <ToolSection />
    </div>
  );
}
