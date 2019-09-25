import { ReactNode } from "react";
import { History } from "history";
import { User } from "../../../store/types/user";

export interface Props {
  children?: ReactNode;
  history: History;
  saveUser: (data: User) => void;
}

export interface State {
  passwordField: string | null;
  emailField: string | null;
  isError: boolean;
  emailErrorMessage: string | null;
  passwordErrorMessage: string | null;
}
