import { Link } from "react-router-dom";
import "./styles.css";

const Login = () => {
  return (
    <div className="authentication-container">
      <div className="card input-group">
        <Link className="title-w-logo text-lg text-primary text-center" to="/">
          <img src="/assets/logo-colored.svg" className="nav-logo" />
          pawws - Log In
        </Link>
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <button className="btn btn-primary text-center">Log In</button>
        <Link className="text-description text-center" to="/login">
          Forgot password?
        </Link>

        <hr className="divider" />
        <Link className="btn outline-primary text-center" to="/signup">
          Or Sign Up Now!
        </Link>
      </div>
    </div>
  );
};

export default Login;
