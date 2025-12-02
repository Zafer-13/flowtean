import { HeroHeader } from "@/app/(marketing)/_components/header";
import HeroSection from "@/app/(marketing)/_components/hero-section";
import { ModeToggle } from "@/components/ui/theme-toggle";


export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
    </div>
  );
}
