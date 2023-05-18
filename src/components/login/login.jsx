import "./login.css";
import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt="spotify-logo"
        className="spotify-logo-img"
      />
      <a className="login-text" href={loginUrl}>
        Login with Spotify
      </a>
    </div>
  );
};
export default Login;
