import { Shelf } from "fast-jsx";
import Children from "./organism/Children.organism";
import DataGraph from "./organism/DataGraph.organism";
import CheckList from "./organism/CheckList.organism";
export default function DashboardPage() {
  return (
    <Shelf.Col
      option={{
        display: "gap-y-8 flex",
        boundary: "rounded-md pb-[156px]",
      }}
    >
      <Children />
      <DataGraph />
      <CheckList />
    </Shelf.Col>
  );
}
