import TargetCursor from "@/components/bits/TargetCursor";
import BelongSection from "@/components/home/BelongSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import StatsSection from "@/components/home/StatsSection";
import { accent, indigo } from "@/lib/colors";

export default function Home() {
  return (
    <>
      {/* Target Cursor */}
      {/* Only visible on desktop */}
      <div className="hidden md:block">
        <TargetCursor
          spinDuration={2.25}
          hideDefaultCursor={false}
          parallaxOn
          hoverDuration={0.25}
          cursorColor={indigo(0.5)}
          cursorColorOnTarget={accent.indigoLightest}
        />
      </div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ShowcaseSection />
      <BelongSection />
      <CTASection />
    </>
  );
}
