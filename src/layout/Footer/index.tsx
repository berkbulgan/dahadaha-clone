import classes from "./style.module.scss";
import PortalSVG from "../../assets/Images/portal.svg";
import DiscoverSVG from "../../assets/Images/discover.svg";
import WalletSVG from "../../assets/Images/wallet.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLogo + " " + classes.footerIconActive}>
        <img src={DiscoverSVG} alt="Discover Logo" width="24px" height="24px" />
        KEŞFET
      </div>
      <img src={PortalSVG} alt="Portal Logo" width="70px" height="70px" className={classes.footerPortal}/>
      <div className={classes.footerLogo}>
        <img src={WalletSVG} alt="Wallet Logo" width="24px" height="24px" />
        DAHA CÜZDAN
      </div>
    </footer>
  );
};

export default Footer;
