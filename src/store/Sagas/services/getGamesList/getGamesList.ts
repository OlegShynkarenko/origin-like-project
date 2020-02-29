export const getGamesList = async () => {
  const req = await fetch("/api/games-list", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const response = await req.json();
  if (response.status === "error") throw new Error(response.message);

  return response;
};
