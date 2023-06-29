import CompareDisplayPage from "@/app/compare/display/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Display size comparison | Howbigg",
};

export default function Home() {
  return <CompareDisplayPage />;
}
