import validator from "validator";

interface Validator {
  isValid: boolean;
  message?: string | undefined;
}

export const isPasswordValid = (pass: string | undefined): Validator => {
  return validator.isLength(pass as string, { min: 8, max: 25 })
    ? { isValid: true }
    : {
        isValid: false,
        message: "Password length should be from 8 to 25 characters"
      };
};

export const isEmailValid = (email: string | undefined): Validator => {
  return validator.isEmail(email as string, {
    allow_utf8_local_part: false,
    require_tld: true
  })
    ? { isValid: true }
    : { isValid: false, message: "Email address is invalid" };
};

export const isTextValid = (text: string | undefined): Validator => {
  return validator.isAlpha(text as string, "en-US") &&
    !validator.isEmpty(text as string)
    ? { isValid: true }
    : {
        isValid: false,
        message: "Name should be a text, no empty field allowed"
      };
};
