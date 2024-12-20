export interface Survey {
  surveyId: number;
  childSurveyId: number | null;
  script: string;
  status: number | null;
}
