export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white mb-5 shadow">
      <div className="layout h-16 flex items-center justify-between flex-wrap md:flex-nowrap">
        <a href="/" className="text-primary-500 font-bold">
          <p className="ml-3 font-bold">How big is your...</p>
        </a>
        {/*<Navigation />*/}
      </div>
    </header>
  );
}
