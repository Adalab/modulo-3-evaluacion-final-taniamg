const CallToApi = () => {
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json '
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results.map((character) => {
        return {
          image: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          episode: character.episode,
          status: character.status,
          id: character.id,
        };
      });
    });
};
export default CallToApi;
