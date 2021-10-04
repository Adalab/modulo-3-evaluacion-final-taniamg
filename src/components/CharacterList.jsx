import '../styles/layout/characterList.scss';
import CharacterCard from './CharacterCard';
import CharacterNoExist from './CharacterNoExist';

const CharacterList = (props) => {
  let component = null;

  if (props.character.length === 0) {
    component = <CharacterNoExist handleResetName={props.handleResetName} />;
  } else {
    component = props.character.map((character) => (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    ));
  }

  return (
    <>
      <h2 className="character_list-title">Listado de Personajes</h2>
      <section className="character_container">
        <ul className=" character_list-elements character_list-elements_container ">
          {component}
        </ul>
      </section>
    </>
  );
};

export default CharacterList;
