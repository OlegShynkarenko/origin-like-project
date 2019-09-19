import validator from "validator";

export const passwordValidator = (pass: string) => {
  return validator.isLength(pass, { min: 8, max: 25 })
    ? { isValid: true }
    : {
        isValid: false,
        message: "Password length should be from 8 to 25 characters"
      };
};

export const emailValidator = (email: string) => {
  return validator.isEmail(email, {
    allow_utf8_local_part: false,
    require_tld: true
  })
    ? { isValid: true }
    : { isValid: false, message: "Email address is invalid" };
};

export const textValidator = (text: string) => {
  return validator.isAlpha(text, "en-US") && !validator.isEmpty(text)
    ? { isValid: true }
    : {
        isValid: false,
        message: "Name should be text, no empty field allowed"
      };
};
