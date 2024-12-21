export type CenterTag =
  | "언어"
  | "놀이"
  | "심리"
  | "감각통합"
  | "인지"
  | "미술"
  | "사회성"
  | "특수체육"
  | "ABA"
  | "운동"
  | "음악"
  | "작업"
  | "행동";

export interface Center {
  centerId: number;
  images: string[];
  isScraped: boolean;
  location: string;
  name: string;
  tags: CenterTag[];
}
