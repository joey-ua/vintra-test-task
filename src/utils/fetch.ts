export const fetchWithToken = (resource: any, options = {}) => {
  const authToken = localStorage.getItem('authToken');

  return fetch(
    resource,
    {
      ...options,
      headers: { Authorization: "Bearer " + authToken
    } }
  )
    .then((response) => {
      if (response.status === 401) throw new Error();
      if (response.statusText === 'No Content') return null;

      return response.json();
    })
}
