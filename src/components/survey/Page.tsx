import SurveyLayout from "./Layout";
import NoticeTemplate from "./template/Notice.template";
import { Action } from "fast-jsx";
import OngoingTemplate from "./template/Ongoing.template";
import SubmitTemplate from "./template/Submit.template";

export default function SurveyPage() {
  return (
    <SurveyLayout>
      <Action.Replace
        actions={[
          ["notice", <NoticeTemplate key="notice" />],
          ["ongoing", <OngoingTemplate key="ongoing" />],
          ["submit", <SubmitTemplate key="submit" />],
        ]}
      >
        <NoticeTemplate />
      </Action.Replace>
    </SurveyLayout>
  );
}
