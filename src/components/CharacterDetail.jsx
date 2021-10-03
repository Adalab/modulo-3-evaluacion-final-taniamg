import '../styles/modalMask.scss';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  return (
    <>
      <div className="modalMask">
        <div className="modalMask_box rotate">
          <Link to="/">
            <span className="modal_close">x</span>
          </Link>
          <section>
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
            <p className="character_detail">🌌{props.character.origin.name}</p>
            <p className="character_detail">
              📼
              {props.character.episode}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
