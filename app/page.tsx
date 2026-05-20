import { Footer } from "./_components/layout/Footer";
import { Header } from "./_components/layout/Header";
import { ClientLogos } from "./_sections/ClientLogos";
import { Contact } from "./_sections/contact/Contact";
import { Hero } from "./_sections/Hero";
import { Pitch } from "./_sections/Pitch";
import { Services } from "./_sections/services/Services";
import { StatsBar } from "./_sections/StatsBar";
import { WhoWeHelp } from "./_sections/WhoWeHelp";
import { Work } from "./_sections/work/Work";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <span id="top" aria-hidden />
        <Hero />
        <StatsBar />
        <Pitch />
        <WhoWeHelp />
        <Services />
        <Work />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
