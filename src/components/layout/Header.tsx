import Image from "next/image";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className="top-0 z-50 bg-white mb-5 shadow">
      <div className="h-16 mx-4 flex items-center justify-between flex-wrap md:flex-nowrap">
        <a href="/" className="text-primary-500 font-bold flex items-center">
          <Image
            src="/favicon/android-chrome-512x512.png"
            alt="Logo of the application"
            width={32}
            height={32}
          />
          <p className="ml-2 font-bold">Howbigg</p>
        </a>
        <Navigation />
      </div>
    </header>
  );
}
