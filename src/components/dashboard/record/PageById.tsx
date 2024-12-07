import HeaderDetail from "@/design/HeaderDetail";
import RecordLayout from "./PageById.layout";
import { cn } from "fast-jsx/util";

export default function RecordPageById() {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full",
  };
  return (
    <RecordLayout>
      <div className={cn(container)}>record page by id</div>
    </RecordLayout>
  );
}
