import { ReactNode } from "react";
import { History } from "history";
import { User } from "@store/types/user";

export interface Props {
  children?: ReactNode;
  history: History;
  saveUser: (data: User) => void;
}

export interface State {
  passwordField: Nullable<string>;
  emailField: Nullable<string>;
  isError: boolean;
  emailErrorMessage: Nullable<string>;
  passwordErrorMessage: Nullable<string>;
}
