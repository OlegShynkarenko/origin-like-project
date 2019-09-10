import validator from "validator";

export const passwordValidator = (pass: string) => {
  return validator.isLength(pass, { min: 8, max: 25 });
};

export const emailValidator = (email: string) => {
  return validator.isEmail(email, {
    allow_utf8_local_part: false,
    require_tld: true
  });
};
