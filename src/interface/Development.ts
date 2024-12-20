export type DevelopmentType = "LM" | "GM" | "SH" | "CG" | "LG" | "SC";
export type DevelopmentTermType =
  | "localMuscle"
  | "globalMuscle"
  | "selfHelp"
  | "cognitive"
  | "language"
  | "social";
export const developmentTypeString: Record<DevelopmentType, string> = {
  LM: "소근육",
  GM: "대근육",
  SH: "자조",
  CG: "인지",
  LG: "언어",
  SC: "사회성",
};

export interface Development {
  developmentType: DevelopmentType;
  score: number;
  isRisk: boolean;
}
interface SurveyTitle {
  developmentType: DevelopmentType;
  title: string;
}
export interface DevelopmentInfo {
  name: string;
  months: number;
  birthdate: string;
  surveyDate: string;
  developments: Development[];
  surveyTitles: SurveyTitle[];
}
