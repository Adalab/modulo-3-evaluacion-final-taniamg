import '../styles/characterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.character.map((character) => (
    <li key={character.id}>
      <CharacterCard character={character} />
    </li>
  ));

  return (
    <>
      <section className="character_list">
        <h2>Listado de Personajes</h2>
        <ul className="character_list-elements">{characterElements}</ul>
      </section>
    </>
  );
};

export default CharacterList;
