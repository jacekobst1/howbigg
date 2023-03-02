import { BsDisplayFill } from "@react-icons/all-files/bs/BsDisplayFill";
import Button from "@/components/buttons/Button";
import Display from "@/app/compare/display/types/Display";
import { generateDisplayByExistingOnes } from "@/app/compare/display/utils/displayGenerator";

interface AddNewDisplayButtonProps {
  displays: Display[];
  setDisplays: (displays: Display[]) => void;
}

export default function AddNewDisplayButton({
  displays,
  setDisplays,
}: AddNewDisplayButtonProps) {
  function addNewDisplay() {
    const newDisplay = generateDisplayByExistingOnes(displays);
    setDisplays([...displays, newDisplay]);
  }

  return (
    <Button onClick={addNewDisplay} className="ml-2" variant="outline">
      <BsDisplayFill className="mr-2" />
      Add
    </Button>
  );
}
