import { Link } from 'react-router-dom';
import '../styles/CharacterCard.scss';

function CharacterCard(props) {
  return (
    <Link
      className="character_card-link"
      to={`./CharacterDetail/${props.character.id}`}
    >
      <img
        className="character_card-img"
        src={props.character.image}
        alt={props.character.name}
      />
      <p>{props.character.name}</p>
      <p>{props.character.species}</p>
    </Link>
  );
}

export default CharacterCard;
