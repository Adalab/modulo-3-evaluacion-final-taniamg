import ModalWindow from './ModalWindow';

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <ModalWindow>
        <h2>
          Debes volver a el univero de Rick & Morty para encontrar un personaje
          valido
        </h2>
      </ModalWindow>
    );
  } else {
    return (
      <ModalWindow>
        <img
          src={props.character.image}
          alt="character img"
          title="image"
          className=""
        />

        <p className="character_detail">
          👤
          {props.character.name}
        </p>
        <p className="character_detail">
          👽
          {props.character.species}
        </p>
        <p className="character_detail">
          💀
          {props.character.status}
        </p>
        <p className="character_detail">🌌{props.character.origin}</p>
        <p className="character_detail">
          📼
          {props.character.episode.length}
        </p>
      </ModalWindow>
    );
  }
};
export default CharacterDetail;
