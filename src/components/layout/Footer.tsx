import clsxm from "@/lib/clsxm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsxm(
        "w-full",
        "bg-base-100 text-slate-500 drop-shadow",
        "py-4 mt-5"
      )}
    >
      <div className="footer footer-center layout items-center">
        <p>Copyright © {currentYear} - All right reserved</p>
      </div>
    </footer>
  );
}
