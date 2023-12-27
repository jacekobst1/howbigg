import config from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-slate-500 py-4 mt-10 border-t border-slate">
      <div className="footer footer-center items-center">
        <div className="md:flex">
          <p>
            © {currentYear} {config.shortUrl} - All rights reserved
          </p>
          <p className="px-1 hidden md:block">|</p>
          <p>
            Contact: <a href="mailto:jacek@howbigg.com" className="text-primary-500">jacek@howbigg.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
