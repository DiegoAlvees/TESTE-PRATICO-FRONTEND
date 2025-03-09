import logo from '../../assets/Logo.svg';
import './Header.css'

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo BeTalent" />
    </header>
  );
};

export default Header;
