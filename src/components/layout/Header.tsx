import Image from "next/image";

export default function Header() {
  return (
    <header className="top-0 z-50 bg-white mb-5 shadow">
      <div className="layout h-16 flex items-center justify-between flex-wrap md:flex-nowrap">
        <a href="/" className="text-primary-500 font-bold flex items-center">
          {/*<img src="/images/favicon/favicon-32x32.png" alt="abc" />*/}
          <Image
            src="/images/logo.png"
            alt="Logo of the application"
            width={32}
            height={32}
          />
          <p className="ml-2 font-bold">How big is your...</p>
        </a>
        {/*<Navigation />*/}
      </div>
    </header>
  );
}
