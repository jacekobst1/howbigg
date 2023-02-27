import clsxm from "@/lib/clsxm";

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
        <p>© {currentYear} howbigg.com - All rights reserved</p>
      </div>
    </footer>
  );
}
