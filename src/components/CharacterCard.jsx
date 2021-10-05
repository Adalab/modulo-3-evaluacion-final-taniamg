import { Link } from 'react-router-dom';
import '../styles/layout/characterList.scss';

function CharacterCard(props) {
  return (
    <Link
      className="character_card-link"
      to={`/character/${props.character.id}`}
    >
      <img
        className="character_card-img card_change"
        src={props.character.image}
        alt={props.character.name}
      />
      <p className="character_detail card_change">{props.character.name}</p>
      <p className="character_detail card_change">{props.character.species}</p>
      <p className="character_detail card_change"> {props.character.status}</p>
    </Link>
  );
}

export default CharacterCard;
