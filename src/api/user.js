export const hostDataApi = async (host) => {
  const url = `http://localhost:8000/user/${host?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(host),
  });

  const data = await response.json();
  return data;
};
