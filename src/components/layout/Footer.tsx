export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-base-100 drop-shadow mt-5 text-slate-500">
      <div className="footer footer-center layout items-center">
        <p>Copyright © {currentYear} - All right reserved</p>
      </div>
    </footer>
  );
}
