import jwt from "jsonwebtoken";
import emailValidator from "email-validator";
import { JWT_SECRET } from "../config";

export const isLoggedIn = () => {
  return true;
  const token = localStorage.getItem("e-learning-token");
  if (!token) return false;
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    localStorage.setItem("userId", verified.userId);
    localStorage.setItem("email", verified.email);
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
  if (!emailValidator.validate(register.email)) return false;
  return true;
};

export const loginValidate = (login) => {
  const { email, password } = login;
  if (!email || !password) return false;
  if (!emailValidator.validate(login.email)) return false;
  return true;
};
