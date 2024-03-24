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
      <h3 className="mt-10 lg:mt-20">
        Hi, if you would like to contact me, please send an email to
        <a href="mailto:jacek@howbigg.com" className="text-primary-500 ml-1">jacek@howbigg.com</a>
      </h3>

      <div className="pt-10">
        <span>
        I would be happy to hear comments or requests about the operation of the site.
          I am also open to cooperation or marketing activities.
          Here you can also make requests regarding the processing of your personal data (see <a
          href="/privacy-policy.html" target="_blank" className="text-primary-500">Privacy policy</a> for more information).
        </span>
      </div>

      <div className="pt-5">
        <span>
          I kindly ask you <b>not to send proposals related to improving SEO</b>, as I am not interested.
        </span>
      </div>
    </div>
  );
}
