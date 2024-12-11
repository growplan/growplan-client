import Notice from "./atom/Notice.atom";
import ButtonContainerMolecule from "./molecule/ButtonContainer.molecule";
import CreateDevelopment from "./organism/CreateDevelopment.organism";
import CreateImage from "./organism/CreateImage.organism";
import CreateScript from "./organism/CreateScript.organism";
import RecordLayout from "./PostPage.layout";
import { cn } from "fast-jsx/util";

export default function RecordPostPage() {
  const container = {
    displays: "flex flex-col items-center gap-y-12",
    sizes: "w-full",
  };
  return (
    <RecordLayout>
      <div className={cn(container)}>
        <Notice />
        <CreateDevelopment />
        <CreateImage />
        <CreateScript />
      </div>
      <ButtonContainerMolecule title="제출하기" onClick={() => {}} />
    </RecordLayout>
  );
}
