import jwt from "jsonwebtoken";

export const isLoggedIn = () => {
  const token = localStorage.getItem("e-learning-token");
  if (!token) return false;
  try {
    const verified = jwt.verify(token, "GOMYCODE");
    if (verified) return true;
  } catch (err) {
    return false;
  }

  // GET THE TOKEN FROM THE LOCAL STORAGE
  //IF NOT FOUND RETURN FALSE
  //IF FOUND AND NOT VALID RETURN FALSE
  //IF FOUND AND VALID RETURN TRUE
  ///CHECK THE TOKEN IF VALID
};
