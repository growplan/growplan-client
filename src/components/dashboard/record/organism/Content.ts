import { DevelopmentTermType, DevelopmentType } from "@/interface/Development";

export interface Content {
  title: string;
  type: DevelopmentType | "all";
}
export const contents: Content[] = [
  { title: "전체", type: "all" },
  { title: "대근육", type: "GM" },
  { title: "소근육", type: "LM" },
  { title: "인지", type: "CG" },
  { title: "언어", type: "LG" },
  { title: "사회성", type: "SC" },
  { title: "자조", type: "SH" },
];
