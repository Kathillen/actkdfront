export interface Student {
  id?: string;

  name: string;
  age: number;
  belt: BeltLevel;

  motherName?: string | null;
  fatherName?: string | null;

  bloodType?: BloodType |  null;
  phone?: string | null;
  address?: string | null;
  observations?: string | null;

  enrollmentDate: string | null;
  monthlyFee: number | null;

  createAt?: string;
  updateAT?: string;
}

export type BeltLevel = 
  | "Faixa Branca"
  | "Cinza"
  | "Amarela"
  | "Amarela ponta Verde"
  | "Verde"
  | "Verde ponta Azul"
  | "Azul"
  | "Azul ponta Vermelha"
  | "Vermelha"
  | "Vermelha ponta Preta"
  | "Preta";

export const BELT_LEVELS: BeltLevel[] = [
  "Faixa Branca",
  "Cinza",
  "Amarela",
  "Amarela ponta Verde",
  "Verde",
  "Verde ponta Azul",
  "Azul",
  "Azul ponta Vermelha",
  "Vermelha",
  "Vermelha ponta Preta",
  "Preta",
];

export const BLOOD_TYPES = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
] as const;

export type BloodType = typeof BLOOD_TYPES[number];
