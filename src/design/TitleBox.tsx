import { LineBreaks } from "fast-jsx";
import { cn } from "fast-jsx/util";

interface TitleBoxProps {
  title: string;
  subtitle?: string;
  descriptions?: string | string[];
  className?: string;
}

export default function TitleBox(props: TitleBoxProps) {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full",
    className: props.className,
    boundaries: "pl-6 ",
  };
  return (
    <div className={cn(container)}>
      <div className="text-blue-5">{props.subtitle}</div>
      <div className="font-bold text-black text-[20px]">{props.title}</div>
      <LineBreaks
        texts={props.descriptions}
        className="text-[12px] text-black-8 mt-3"
      />
    </div>
  );
}
