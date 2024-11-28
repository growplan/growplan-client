import { useParams } from "react-router-dom";
import SurveyLayout from "./Layout";

export default function SurveyPage() {
  const { surveyType } = useParams();
  return <SurveyLayout>{surveyType}</SurveyLayout>;
}
