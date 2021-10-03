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
      <h2 className="character_list-title">Listado de Personajes</h2>
      <section className="">
        <ul className=" character_list-elements character_list-elements_container ">
          {characterElements}
        </ul>
      </section>
    </>
  );
};

export default CharacterList;
