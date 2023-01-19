import { SiZend } from "@react-icons/all-files/si/SiZend";
import PrimaryLink from "@/components/links/PrimaryLink";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white mb-5 shadow">
      <div className="layout md:h-16 h-24 flex items-center justify-between flex-wrap md:flex-nowrap">
        <PrimaryLink href="/" className="font-bold">
          <SiZend />
          <p className="ml-3 font-bold">How big is your...</p>
        </PrimaryLink>
        <Navigation />
      </div>
    </header>
  );
}
