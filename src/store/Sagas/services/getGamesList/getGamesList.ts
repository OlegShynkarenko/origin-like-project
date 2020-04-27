export const getGamesList = async (page = 1, limit = 20) => {
  try {
    const req = await fetch(`/api/games-list/?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    return await req.json();
  } catch (e) {
    return e.message;
  }
};
