import { cn } from "fast-jsx/util";
import Header from "./organism/Header.organism";
import Map from "./organism/Map.organism";
import CentersOrganism from "./organism/Centers.organism";
export default function CenterPage() {
  const container = {
    sizes: "w-screen",
  };
  return (
    <div className={cn(container)}>
      <Header />
      <Map />
      <CentersOrganism />
    </div>
  );
}
