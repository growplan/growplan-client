import { DevelopmentType } from "./Development";

export interface Record {
  id: number;
  script: string;
  recordedDate: string;
  developmentTypes: DevelopmentType[];
  isLiked: boolean;
  imageUrls: string[];
}
