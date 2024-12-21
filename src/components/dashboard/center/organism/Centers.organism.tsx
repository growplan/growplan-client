import useCenter from "@/hook/useCenter";
import { cn } from "fast-jsx/util";
import CenterMolecule from "../molecule/Center.molecule";
import { Center, CenterTag } from "@/interface/Center";
import { State } from "fast-jsx/interface";

export default function CentersOrganism({
  keyword,
  state,
}: {
  keyword: string;
  state: State<Center | undefined>;
}) {
  const [center, setCenter] = state;
  const { centers } = useCenter();
  const container = {
    displays: "flex flex-col items-center gap-y-10",
    pressures: "pt-5 pl-5",
    sizes: "h-[calc(100vh-348px)] w-full",
    backgrounds: "bg-white",
    styles: "overflow-y-scroll",
  };

  return (
    <div className={cn(container)}>
      {centers
        ?.filter(
          (center) =>
            center.name.includes(keyword) ||
            center.location.includes(keyword) ||
            center.tags.includes(keyword as CenterTag)
        )
        .map((center) => (
          <button onClick={() => setCenter(center)}>
            <CenterMolecule {...center} />
          </button>
        ))}
    </div>
  );
}
