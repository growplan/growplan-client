import { cn } from "fast-jsx/util";
import ButtonContainerMolecule from "./molecule/ButtonContainer.molecule";
import HeaderMolecule from "./molecule/Header.molecule";

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = {
    positions: "relative",
    displays: "flex flex-col",
    boundaries: "pt-[68px]",
    sizes: "w-full min-h-screen ",
  };
  const body = {
    displays: "flex flex-col flex-grow items-center justify-center",
  };
  return (
    <div className={cn(container)}>
      <HeaderMolecule />
      <div className={cn(body)}>{children}</div>
    </div>
  );
}
