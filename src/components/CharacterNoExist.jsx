import '../styles/layout/noExist.scss';
import ButtonNoExist from './ButtonNoExist';

const CharacterNoExist = (props) => {
  return (
    <div className="notFound">
      <h1>Try again, this character does not exist!</h1>

      <ButtonNoExist
        className="notFound__button"
        text="Back"
        handleResetName={props.handleResetName}
      />
    </div>
  );
};
export default CharacterNoExist;
