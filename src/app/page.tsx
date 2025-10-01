import CompareDisplayPage from "@/app/compare/display/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Display size comparison | Howbigg",
};

interface HomeProps {
  searchParams: { displays?: string };
}

export default function Home({ searchParams }: HomeProps) {
  return <CompareDisplayPage searchParams={searchParams} />;
}
