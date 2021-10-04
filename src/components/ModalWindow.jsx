import { Link } from 'react-router-dom';
import '../styles/modalMask.scss';
const ModalWindow = (props) => {
  return (
    <div className="main_window">
      <div className="main_window-border">
        <div>
          <header className="main_window-back">
            <Link to="/">
              <span className="modal_close">
                <button className="button_back">Home</button>
              </span>
            </Link>
          </header>
          <section className="modal_detail">{props.children}</section>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
