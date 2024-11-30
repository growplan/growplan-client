import { useParams } from "react-router-dom";
import SurveyLayout from "./Layout";
import NoticeOrganism from "./organism/Notice.organism";

export default function SurveyPage() {
  const { surveyType } = useParams();
  return (
    <SurveyLayout>
      <NoticeOrganism />
    </SurveyLayout>
  );
}
