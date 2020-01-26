import { RegisterUser } from "@store/types/RegisterUser";

export const addUserToDb = async (user: RegisterUser) => {
  console.log(user);
  return fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: user })
  });
};
