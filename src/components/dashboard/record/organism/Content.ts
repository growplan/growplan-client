import { DevelopmentTermType } from "@/interface/Development";

interface Content {
  title: string;
  type: DevelopmentTermType | "all";
}
export const contents: Content[] = [
  { title: "전체", type: "all" },
  { title: "대근육", type: "globalMuscle" },
  { title: "소근육", type: "localMuscle" },
  { title: "인지", type: "cognitive" },
  { title: "언어", type: "language" },
  { title: "사회성", type: "social" },
  { title: "자조", type: "selfHelp" },
];
