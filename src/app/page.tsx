import CompareDisplayPage from "@/app/compare/display/CompareDisplay";
import { Metadata } from "next";
import { generateComparisonMetadata } from "@/app/compare/display/utils/metadataGenerator";

interface HomeProps {
  searchParams: Promise<{ displays?: string }>;
}

export async function generateMetadata({
  searchParams,
}: HomeProps): Promise<Metadata> {
  const params = await searchParams;
  return generateComparisonMetadata(params.displays);
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  return <CompareDisplayPage searchParams={params} />;
}
