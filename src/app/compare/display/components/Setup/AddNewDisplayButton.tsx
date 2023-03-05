import { BsDisplayFill } from "@react-icons/all-files/bs/BsDisplayFill";
import Button from "@/components/buttons/Button";
import Display from "@/app/compare/display/types/Display";
import { generateDisplayByExistingOnes } from "@/app/compare/display/utils/displayGenerator";

interface AddNewDisplayButtonProps {
  createDisplay: () => void;
  displaysLength: number;
}

export default function AddNewDisplayButton({
  createDisplay,
  displaysLength,
}: AddNewDisplayButtonProps) {
  return (
    <Button
      onClick={createDisplay}
      className="ml-2"
      variant="outline"
      disabled={displaysLength === 6}
    >
      <BsDisplayFill className="mr-2" />
      Add
    </Button>
  );
}
