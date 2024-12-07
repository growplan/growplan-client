export interface Child {
  id: number;
  name: string;
  birthdate: string;
  gender: string;
  bornHeight: number;
  bornWeight: number;
  isPremature: boolean;
  birthWeeks: number;
}

export interface CreateChild extends Omit<Child, "id"> {}
