import { Shelf } from "fast-jsx";
import Introduction from "./organism/Introduction.organism";
import DataGraph from "./organism/DataGraph.organism";
import CheckList from "./organism/CheckList.organism";
export default function DashboardPage() {
  return (
    <Shelf.Col
      option={{
        background: "bg-white",
        display: "gap-y-8",
        boundary: "rounded-md",
      }}
    >
      <Introduction />
      <DataGraph />
      <CheckList />
    </Shelf.Col>
  );
}
