import { useParams } from "react-router-dom";

export default function Page() {
  const { surveyType } = useParams();
  return <div>{surveyType}</div>;
}
