import { RegisterUser } from "@store/types/RegisterUser";

export const addUserToDb = async (user: RegisterUser) => {
  return fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: user })
  });
};
