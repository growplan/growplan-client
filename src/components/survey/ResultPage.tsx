import Loading from "@/design/Loading";
import { useDevelopmentByType } from "@/hook/useDevelopment";
import { DevelopmentType } from "@/interface/Development";
import { Action } from "fast-jsx";
import { useParams } from "react-router-dom";
import ResultInfo from "./organism/ResultInfo.organism";
import { Header } from "@/design/Header";
import ResultAnalysis from "./organism/ResultAnalysis.organism";
import ResultButtonContainer from "./organism/ResultButtonContainer.organism";

export default function ResultPage() {
  const { surveyType } = useParams<{ surveyType: DevelopmentType }>();

  const { development: result, isLoading } = useDevelopmentByType(
    surveyType as DevelopmentType
  );
  return (
    <div>
      <Action.Replace actions={[[isLoading, <Loading.Screen />]]}>
        {surveyType && result && (
          <div>
            <Header
              option={{
                noShadow: true,
              }}
            />
            <ResultInfo result={result} type={surveyType} />
            <ResultAnalysis result={result} type={surveyType} />
            <ResultButtonContainer />
          </div>
        )}
      </Action.Replace>
    </div>
  );
}
