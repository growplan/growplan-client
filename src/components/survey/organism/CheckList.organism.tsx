import { cn } from "fast-jsx/util";

interface CheckListOrganismProps {
  question: string;
}

export default function CheckListOrganism(props: CheckListOrganismProps) {
  const container = {
    sizes: "w-full h-[516px]",
    boundaries: "rounded-[10px]",
  };
  return (
    <div className={cn(container)}>
      <div>{props.question}</div>
      <div></div>
    </div>
  );
}
