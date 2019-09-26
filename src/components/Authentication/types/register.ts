export interface Data {
  country: Nullable<string>;
  day: Nullable<string>;
  month: Nullable<string>;
  year: Nullable<string>;
  email: Nullable<string>;
  password: Nullable<string>;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
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
