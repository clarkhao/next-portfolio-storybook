import LetterUI from "../../stories/ui/Letter/Letter";
import type { TLetter } from "../../stories/ui/Letter/Letter";

export default function Letter(props: TLetter) {
  return <LetterUI {...props} />;
}
