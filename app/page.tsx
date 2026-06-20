import BelongSection from "@/components/home/BelongSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import StatsSection from "@/components/home/StatsSection";
import TargetCursor from "@/components/TargetCursor";

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
          cursorColor="rgba(99,102,241,0.5)"
          cursorColorOnTarget="#a5b4fc"
        />
      </div>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ShowcaseSection />
      <BelongSection />
      <CTASection />
    </>
  );
}
