import { Link } from "react-router-dom";
import classes from "./style.module.scss";
import Logo from "./logo.png";
import LoginSection from "../../components/LoginSection";


const Header = () => {
  return ( 
  <header className={classes.header}>
    <Link to="/">
      <img src={Logo} alt="Daha Daha Logo" width="80px" height="40px" className={classes.headerLogo} />
    </Link>
    <LoginSection/>
  </header>
  );
}
 
export default Header;