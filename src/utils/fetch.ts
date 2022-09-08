export const fetchWithToken = (resource: any, token: string) => fetch(
  resource,
  { headers: { Authorization: "Bearer " + token } }
)
  .then((res) => res.json());
