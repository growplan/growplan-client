import { Action } from "fast-jsx";
import OpeningTemplate from "./template/Opening.template";
import ResultTemplate from "./template/Result.template";

export default function ReportPage() {
  return (
    <Action.Replace
      actions={[
        ["opening", <OpeningTemplate />],
        ["result", <ResultTemplate />],
      ]}
    >
      <OpeningTemplate />
    </Action.Replace>
  );
}
