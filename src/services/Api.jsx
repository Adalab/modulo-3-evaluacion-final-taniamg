function callToApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((json) => {
      return json.results.map((character) => {
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          episode: character.episode,
          status: character.status,
          id: character.id,
          url: character.url,
          gender: character.gender,
        };
      });
    });
}
const CharactersApi = {
  callToApi: callToApi,
};
export default CharactersApi;
