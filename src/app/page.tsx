import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import MusicSection from "@/components/MusicSection";
import MerchSection from "@/components/MerchSection";

export default function Home() {
  return (
    <div className="font-sans">
        <main className="">
            <Hero></Hero>
            <EventsSection></EventsSection>
            <MusicSection></MusicSection>
            <MerchSection></MerchSection>
        </main>
    </div>
  );
}
