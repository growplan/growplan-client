import { DevelopmentType } from "./Development";

export interface Survey {
  surveyId: number;
  childSurveyId: number;
  script: string;
  status: number;
  surveyDate: string;
  developmentType: DevelopmentType;
}
