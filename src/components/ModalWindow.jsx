import { Link } from 'react-router-dom';

const ModalWindow = (props) => {
  return (
    <div className="">
      <div>
        <div className="">
          <header>
            <Link to="/">
              <span className="modal_close">x</span>
            </Link>
          </header>
          <section>{props.children}</section>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
