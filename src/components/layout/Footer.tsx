import config from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-slate-500 py-4 mt-10 border-t border-slate">
      <div className="footer footer-center items-center select-none">
        <p>
          © {currentYear} {config.shortUrl} - All rights reserved
        </p>
      </div>
    </footer>
  );
}
