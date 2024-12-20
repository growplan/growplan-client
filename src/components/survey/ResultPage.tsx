import Loading from "@/design/Loading";
import useDevelopment from "@/hook/useDevelopment";
import { DevelopmentType } from "@/interface/Development";
import { Action } from "fast-jsx";
import { useParams } from "react-router-dom";
import ResultInfo from "./organism/ResultInfo.organism";
import { Header } from "@/design/Header";
import ResultAnalysis from "./organism/ResultAnalysis.organism";
import ResultButtonContainer from "./organism/ResultButtonContainer.organism";

export default function ResultPage() {
  const { surveyType } = useParams<{ surveyType: DevelopmentType }>();
  const { developmentInfo, isLoading } = useDevelopment();
  const result = developmentInfo?.developments.find(
    (development) => development.developmentType === surveyType
  );
  return (
    <div>
      <Action.Replace actions={[[isLoading, <Loading.Screen />]]}>
        {result && (
          <div>
            <Header
              option={{
                noShadow: true,
              }}
            />
            <ResultInfo result={result} />
            <ResultAnalysis result={result} />
            <ResultButtonContainer />
          </div>
        )}
      </Action.Replace>
    </div>
  );
}
