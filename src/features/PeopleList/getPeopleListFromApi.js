export const getPeopleListFromApi = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?page=${page}&api_key=5808b0503fd4aaf8a5636df1649fe0dc`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
