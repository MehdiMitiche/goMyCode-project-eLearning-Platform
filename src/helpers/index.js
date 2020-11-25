import jwt from "jsonwebtoken";
import emailValidator from "email-validator";

export const isLoggedIn = () => {
  const token = localStorage.getItem("e-learning-token");
  if (!token) return false;
  try {
    const verified = jwt.verify(token, "GOMYCODE");
    if (verified) return true;
  } catch (err) {
    return false;
  }
};

export const registerValidate = (register) => {
  const { email, firstName, lastName, password, passwordConfirm } = register;
  if (!email || !firstName || !lastName || !password || !passwordConfirm)
    return false;
  if (password !== passwordConfirm) return false;
  if (!emailValidator(register.email)) return false;
  return true;
};
