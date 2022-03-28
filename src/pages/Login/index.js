import "./styles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { loginService } from "../../services/authServices";

const Login = () => {
  const { setAuth } = useAuth();
  const [inputValues, setInputValues] = useState({
    email: "johndoe@gmail.com",
    password: "johnDoe123",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const loginHandler = async () => {
    try {
      setAuth({
        isAuthenticated: false,
        user: "",
        token: "",
      });
      setError("");
      const response = await loginService(
        inputValues.email,
        inputValues.password
      );

      if (response.status === 200) {
        localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
        localStorage.setItem(
          "PAWWS_USER",
          JSON.stringify(response.data.foundUser)
        );
        setAuth(a => ({
          ...a,
          isAuthenticated: true,
          user: response.data.foundUser,
          token: response.data.encodedToken,
        }));
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.errors[0]);
    }
  };
  return (
    <div className="authentication-container">
      <div className="card input-group">
        <Link className="title-w-logo text-lg text-primary text-center" to="/">
          <img src="/assets/logo-colored.svg" className="nav-logo" />
          pawws - Log In
        </Link>
        {error && <p className="text-red text-center">{error}</p>}
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={inputValues.email}
          onChange={e => setInputValues(v => ({ ...v, email: e.target.value }))}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={inputValues.password}
          onChange={e =>
            setInputValues(v => ({ ...v, password: e.target.value }))
          }
        />
        <button className="btn btn-primary text-center" onClick={loginHandler}>
          Log In
        </button>
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
