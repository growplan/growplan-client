import RecordLayout from "./PageById.layout";
import { cn } from "fast-jsx/util";

export default function RecordPostPage() {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full",
  };
  return (
    <RecordLayout>
      <div className={cn(container)}>record post page</div>
    </RecordLayout>
  );
}
