import SurveyLayout from "./Layout";
import Notice from "./template/Notice.template";
import { Action } from "fast-jsx";
import Ongoing from "./template/Ongoing.template";

export default function SurveyPage() {
  return (
    <SurveyLayout>
      <Action.Replace
        actions={[
          ["notice", <Notice />],
          ["ongoing", <Ongoing />],
        ]}
      >
        <Notice />
      </Action.Replace>
    </SurveyLayout>
  );
}
