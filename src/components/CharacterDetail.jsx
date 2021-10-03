import '../styles/modalMask.scss';

const CharacterDetail = (props) => {
  return (
    <>
      <div className="modalMask">
        <div className="modalMask_box rotate">
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
};

export default CharacterDetail;
