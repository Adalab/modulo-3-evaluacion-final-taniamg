import '../styles/layout/noExist.scss';
import ButtonNoExist from './ButtonNoExist';

const CharacterNoExist = (props) => {
  return (
    <div className="notFound">
      <h1>Prueba de nuevo, ese personaje no pertenece a este universo!</h1>

      <ButtonNoExist
        className="notFound__button"
        text="Back"
        handleResetName={props.handleResetName}
      />
    </div>
  );
};
export default CharacterNoExist;
