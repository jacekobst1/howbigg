import config from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-slate-500 py-4 mt-10 border-t-2 border-gray-200">
      <div className="footer footer-center items-center">
        <div className="md:flex">
          <p>
            © {currentYear} {config.shortUrl} - All rights reserved
          </p>
          <p className="px-1 hidden md:block">|</p>
          <p>
            <a href="/contact" className="text-primary-500">
              Contact
            </a>
          </p>
          <p className="px-1 hidden md:block">|</p>
          <p>
            <a
              href="/privacy-policy.html"
              target="_blank"
              className="text-primary-500"
            >
              Privacy policy
            </a>
          </p>
          <p className="px-1 hidden md:block">|</p>
          <p>
            <a
              href="/cookie-policy.html"
              target="_blank"
              className="text-primary-500"
            >
              Cookie policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
