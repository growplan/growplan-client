import { DevelopmentType } from "./Development";

export interface Record {
  id: number;
  script: string;
  recordedDate: string;
  developmentTypes: DevelopmentType[];
  isLiked: boolean;
  imageUrls: string[];
}
export interface CreateRecord {
  requestDto: {
    developmentTypes: DevelopmentType[];
    script: string;
  };
  files: string[];
}
