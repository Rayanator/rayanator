export interface Question {
  name: string;
  id: string;
  filters?: string[];
  wording: string;
  answer?: string;
  complexity?: number;
}
