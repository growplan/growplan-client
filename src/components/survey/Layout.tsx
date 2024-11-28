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
    boundaries: "pt-[68px]",
  };
  return (
    <div className={cn(container)}>
      <HeaderMolecule />
      {children}
      <ButtonContainerMolecule />
    </div>
  );
}
