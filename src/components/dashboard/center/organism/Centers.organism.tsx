import useCenter from "@/hook/useCenter";
import { cn } from "fast-jsx/util";
import CenterMolecule from "../molecule/Center.molecule";

export default function CentersOrganism() {
  const { centers } = useCenter();
  const container = {
    displays: "flex flex-col items-center gap-y-10",
    pressures: "pt-5 pl-5",
    sizes: "h-[calc(100vh-417px)] w-full",
    backgrounds: "bg-white",
    styles: "overflow-y-scroll",
  };

  return (
    <div className={cn(container)}>
      {centers?.map((center) => (
        <CenterMolecule {...center} />
      ))}
    </div>
  );
}
