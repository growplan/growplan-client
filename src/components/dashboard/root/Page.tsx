import Children from "./organism/Children.organism";
import DataGraph from "./organism/DataGraph.organism";
import CheckList from "./organism/CheckList.organism";
import { cn } from "fast-jsx/util";
export default function DashboardPage() {
  const container = {
    display: "gap-y-8 flex flex-col",
    boundary: "rounded-md",
    paddings: "pt-3.5",
  };
  return (
    <div className={cn(container)}>
      <Children />
      <DataGraph />
      <CheckList />
    </div>
  );
}
