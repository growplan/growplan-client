import { DevelopmentType } from "@/interface/Development";

interface Analysis {
  id: number;
  script: string;
}

const negatives: Analysis[] = [
  {
    id: 1,
    script: "학습 및 의사소통 능력에 어려움을 초래할 수 있어요.",
  },
  {
    id: 2,
    script: "독립적인 활동에 어려움이 발생할 수 있어요.",
  },
  {
    id: 3,
    script: "언어 및 사회성 발달에 영향을 줄 수 있어요.",
  },
  {
    id: 4,
    script: "또래 관계 형성 및 학교 생활 적응에 영향을 미칠 수 있어요.",
  },
  {
    id: 5,
    script: "언어 및 사회성 발달에 영향을 줄 수 있어요.",
  },
];

const positives: Analysis[] = [
  {
    id: 1,
    script: "학습 및 의사소통 능력을 더욱 향상시킬 기회가 있어요.",
  },
  {
    id: 2,
    script: "독립적인 활동 능력을 키울 수 있는 잠재력이 있어요.",
  },
  {
    id: 3,
    script: "언어 및 사회성 발달에 긍정적인 영향을 미칠 수 있어요.",
  },
  {
    id: 4,
    script: "또래 관계 형성과 학교 생활 적응에 좋은 영향을 줄 수 있어요.",
  },
  {
    id: 5,
    script: "언어 및 사회성 발달에서 더 큰 성장을 이룰 가능성이 있어요.",
  },
];

export type Status = "good" | "bad";
const analysis: Record<Status, Record<DevelopmentType, Analysis[]>> = {
  good: {
    LM: positives,
    GM: positives,
    SH: positives,
    CG: positives,
    LG: positives,
    SC: positives,
  },
  bad: {
    LM: negatives,
    GM: negatives,
    SH: negatives,
    CG: negatives,
    LG: negatives,
    SC: negatives,
  },
};
export default analysis;
