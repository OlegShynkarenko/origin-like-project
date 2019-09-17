import { ReactNode } from "react";
import { History } from "history";

export interface authObject {
  id: number;
  email: string;
  password: string;
}

export interface Props {
  children?: ReactNode;
  history: History;
  saveUser: (data: authObject) => void;
}

export interface inputData {
  passwordField: string;
  emailField: string;
}

export interface State {
  authType: string;
  inputData: inputData;
  isError: boolean;
  emailErrorMessage: string | undefined;
  passwordErrorMessage: string | undefined;
}
