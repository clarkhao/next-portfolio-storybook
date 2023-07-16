import { ButtonUI } from "../../stories/ui/Button/Button";
import type {ButtonProps} from "../../stories/ui/Button/Button";

export default function Button({...props}: ButtonProps) {
  return (
    <>
      <ButtonUI {...props} />
    </>
  );
}
