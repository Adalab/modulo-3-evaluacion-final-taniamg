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

            <p className="">
              👤
              {props.character.name}
            </p>
            <p className="">
              👽
              {props.character.species}
            </p>
            <p className="">
              💀
              {props.character.status}
            </p>
            <p className="">🌌{props.character.origin.name}</p>
            <p className="">
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
