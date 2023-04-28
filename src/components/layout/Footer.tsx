import clsxm from "@/lib/clsxm";
import config from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsxm(
        "w-full",
        "bg-base-100 text-slate-500 drop-shadow",
        "py-4 mt-10"
      )}
    >
      <div className="footer footer-center items-center select-none">
        <p>
          © {currentYear} {config.shortUrl} - All rights reserved
        </p>
      </div>
    </footer>
  );
}
