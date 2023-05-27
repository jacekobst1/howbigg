import { BsDisplayFill } from "@react-icons/all-files/bs/BsDisplayFill";
import Button from "@/components/buttons/Button";

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
      variant="light"
      disabled={displaysLength === 6}
    >
      <BsDisplayFill className="mr-2" />
      Add
    </Button>
  );
}
