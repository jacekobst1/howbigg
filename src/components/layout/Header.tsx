import Image from "next/image";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className="top-0 z-50 mb-5 pt-3 md:pt-0 border-b border-slate">
      <div className="h-18 md:h-10 mx-4 flex items-center justify-between flex-wrap md:flex-nowrap">
        <a href="/" className="text-primary-500 font-bold flex items-center">
          <Image
            src="/favicon/android-chrome-192x192.png"
            alt="Logo of the application"
            width={24}
            height={24}
          />
          <p className="ml-2 font-bold">Howbigg</p>
        </a>
        <Navigation />
      </div>
    </header>
  );
}
