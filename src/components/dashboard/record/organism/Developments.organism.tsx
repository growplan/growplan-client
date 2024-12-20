import { cn } from "fast-jsx/util";
import { contents } from "./Content";

export default function Developments() {
  const container = {
    displays: "flex justify-between ",
    sizes: "w-screen max-w-[480px] h-10",
    boundaries: "px-3",
  };
  return (
    <div className={cn(container)}>
      {contents.map((content) => (
        <button key={content.type}>{content.title}</button>
      ))}
    </div>
  );
}
