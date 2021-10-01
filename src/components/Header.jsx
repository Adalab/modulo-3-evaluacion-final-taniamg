import '../styles/header.scss';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="pop_up">
        <img src={Logo} alt="Rick and Morty" className="header_img" />
      </div>
    </header>
  );
};
export default Header;
