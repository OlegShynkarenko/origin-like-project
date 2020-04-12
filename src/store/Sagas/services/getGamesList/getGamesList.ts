export const getGamesList = async () => {
  try {
    const req = await fetch("/api/games-list", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    return await req.json();
  } catch (e) {
    return e.message;
  }
};
