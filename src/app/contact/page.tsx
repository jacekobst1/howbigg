import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact",
    url: "/contact"
  },
  twitter: {
    title: "Contact"
  }
};

export default function ContactPage() {
  return (
    <div className="layout-md text-center">
      <h3 className="mt-20">
        Hi! Contact me by e-mail at
        <a href="mailto:jacek@howbigg.com" className="text-primary-500 ml-1">jacek@howbigg.com</a>
      </h3>
    </div>
  );
}
