import validator from "validator";

export const isPasswordValid = (pass: string) => {
  return validator.isLength(pass, { min: 8, max: 25 })
    ? { isValid: true }
    : {
        isValid: false,
        message: "Password length should be from 8 to 25 characters"
      };
};

export const isEmailValid = (email: string) => {
  return validator.isEmail(email, {
    allow_utf8_local_part: false,
    require_tld: true
  })
    ? { isValid: true }
    : { isValid: false, message: "Email address is invalid" };
};
