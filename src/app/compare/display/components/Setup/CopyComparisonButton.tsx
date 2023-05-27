import { quickToast } from "@/lib/toast";
import Button from "@/components/buttons/Button";
import { FaShare } from "@react-icons/all-files/fa/FaShare";

export default function CopyComparisonButton() {
  function copyUrlToClipboard() {
    navigator.clipboard
      .writeText(location.href)
      .then(() => quickToast("💾 Link copied to clipboard"));
  }

  return (
    <Button onClick={copyUrlToClipboard} className="ml-2" variant="light">
      <FaShare className="mr-2" />
      Share
    </Button>
  );
}
