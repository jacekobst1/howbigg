import CompareDisplayPage from "@/app/compare/display/page";
import { Metadata } from "next";
import { generateComparisonMetadata } from "@/app/compare/display/utils/metadataGenerator";

interface HomeProps {
  searchParams: { displays?: string };
}

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
  return generateComparisonMetadata(searchParams.displays);
}

export default function Home({ searchParams }: HomeProps) {
  return <CompareDisplayPage searchParams={searchParams} />;
}
