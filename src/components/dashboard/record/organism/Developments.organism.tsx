import { cn } from "fast-jsx/util";
import { contents } from "./Content";

export default function Developments() {
  const container = {
    displays: "flex gap-x-4",
  };
  return (
    <div className={cn(container)}>
      {contents.map((content) => (
        <button>{content.title}</button>
      ))}
    </div>
  );
}
