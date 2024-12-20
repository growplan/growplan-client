import { Button } from "fast-jsx";
import { cn } from "fast-jsx/util";
import { OnClick } from "fast-jsx/interface";

interface ButtonContainerMoleculeProps {
  title: string;
  onClick: OnClick;
}

export default function ButtonContainerMolecule({
  title,
  onClick,
}: ButtonContainerMoleculeProps) {
  const container = {
    fixed: "fixed bottom-0",
    displays: "flex items-center",
    sizes: "h-[78px] w-full",
    backgrounds: "bg-white",
    paddings: "px-5",
    shadows: "box-shadow",
  };
  const obstacle = {
    sizes: "h-25 w-full",
    margins: "mt-auto",
  };
  return (
    <>
      <div className={cn(container)}>
        <Button
          title={title}
          onClick={onClick}
          option={{
            width: "w-full",
            height: "h-[60px]",
            background: "bg-blue-5",
            font: "text-lg",
          }}
        />
      </div>
      <div className={cn(obstacle)} />
    </>
  );
}
