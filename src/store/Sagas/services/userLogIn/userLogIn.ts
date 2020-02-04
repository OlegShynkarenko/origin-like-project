import { User } from "@store/types/user";

export const logInUser = async (user: User) => {
  const req = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: user.email, password: user.password })
  });
  const response = await req.json();
  if (response.status === "error") throw new Error(response.message);

  return response;
};
