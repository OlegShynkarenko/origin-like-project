import validator from "validator";

interface IValidatorSuccess {
  isValid: boolean;
  message: null;
}

interface IValidatorFailed {
  isValid: boolean;
  message: string;
}

export type IValidator = IValidatorSuccess | IValidatorFailed;

const nullToString = (val: null | string | undefined) => {
  return val === null ? "" : val;
};

export const isPasswordValid = (pass: Nullable<string>): IValidator => {
  return validator.isLength(nullToString(pass) as string, { min: 8, max: 25 })
    ? { isValid: true, message: null }
    : {
        isValid: false,
        message: "Password length should be from 8 to 25 characters"
      };
};

export const isEmailValid = (email: Nullable<string>): IValidator => {
  return validator.isEmail(nullToString(email) as string, {
    allow_utf8_local_part: false,
    require_tld: true
  })
    ? { isValid: true, message: null }
    : { isValid: false, message: "Email address is invalid" };
};

export const isTextValid = (text: Nullable<string>): IValidator => {
  return validator.isAlpha(nullToString(text) as string, "en-US") &&
    !validator.isEmpty(text as string)
    ? { isValid: true, message: null }
    : {
        isValid: false,
        message: "Name should be a text, no empty field allowed"
      };
};
