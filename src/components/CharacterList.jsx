import '../styles/characterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => (
    <li key={character.id} character={character.id}>
      <CharacterCard characters={character} />
    </li>
  ));

  return (
    <section className="character_list">
      <h2>Listado de Personajes</h2>
      <ul className="character_list-elements">{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
