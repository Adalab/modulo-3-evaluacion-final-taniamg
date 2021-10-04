const ButtonNoExist = (props) => {
  return (
    <button onClick={props.handleResetName} className={props.className}>
      {props.text}
    </button>
  );
};
export default ButtonNoExist;
