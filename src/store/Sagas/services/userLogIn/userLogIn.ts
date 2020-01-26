import { User } from "@store/types/user";

export const logInUser = async (user: User) => {
  return fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: user.email, password: user.password })
  });
};
