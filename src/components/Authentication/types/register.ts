export interface Data {
  country: string | null;
  day: string | null;
  month: string | null;
  year: string | null;
  email: string | null;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
}

export interface User {
  id: number;
  country: string;
  day: string;
  month: string;
  year: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
