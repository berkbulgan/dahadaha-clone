import classes from "./style.module.scss";
import Profile from "../../assets/Images/profile.png";
import useAppStore from "../../context/appContext";

const LoginSection = () => {
  
  const signedIn = useAppStore((state) => state.signedIn);
  const toggleSignedIn = useAppStore((state) => state.toggleSignedIn);

  return (
    <div className={classes.loginSection}>
      {signedIn ? (
        <>
          <button className={classes.profileButtonActive} onClick={toggleSignedIn}>
            <img src={Profile} alt="Account" />
          </button>
        </>
      ) : (
        <>
          <button className={classes.loginButton} onClick={toggleSignedIn}>Giriş Yap</button>
          <button className={classes.profileButton}>
            <img src={Profile} alt="Account" />
          </button>
        </>
      )}
    </div>
  );
};

export default LoginSection;
