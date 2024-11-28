import { Shelf } from "fast-jsx";
import Introduction from "./organism/Introduction.organism";
import DataGraph from "./organism/DataGraph.organism";
import CheckList from "./organism/CheckList.organism";
export default function DashboardPage() {
  return (
    <Shelf.Col
      option={{
        display: "gap-y-8",
        boundary: "rounded-md pb-[156px]",
      }}
    >
      <Introduction />
      <DataGraph />
      <CheckList />
    </Shelf.Col>
  );
}
