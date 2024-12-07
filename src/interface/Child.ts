export interface Child {
  id: number;
  name: string;
  birthdate: string;
  gender: "남자" | "여자";
  bornHeight: number;
  bornWeight: number;
  isPremature: boolean;
  birthWeeks: number;
}

export interface CreateChild extends Omit<Child, "id"> {}
