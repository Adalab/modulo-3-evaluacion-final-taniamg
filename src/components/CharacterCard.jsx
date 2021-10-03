import { Link } from 'react-router-dom';
import '../styles/CharacterCard.scss';

function CharacterCard(props) {
  return (
    <Link
      className="character_card-link"
      to={`/character/${props.character.id}`}
    >
      <img
        className="character_card-img"
        src={props.character.image}
        alt={props.character.name}
      />
      <p className="character_detail">{props.character.name}</p>
      <p className="character_detail">{props.character.species}</p>
      <p className="character_detail"> {props.character.status}</p>
    </Link>
  );
}

export default CharacterCard;
