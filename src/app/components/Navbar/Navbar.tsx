import { SiZend } from "@react-icons/all-files/si/SiZend";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <a href="/" className="text-primary md:order-1 flex space-x-4">
            <SiZend />
            <p className="ml-3 font-bold">How big is your...</p>
          </a>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <li className="md:px-4 md:py-2 text-primary">
                <a href="/compare/screen">Screen</a>
              </li>
              <li className="md:px-4 md:py-2 hover:text-primary/80">
                <a href="">Phone</a>
              </li>
              <li className="md:px-4 md:py-2 hover:text-primary/80">
                <a href="">Watch</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
