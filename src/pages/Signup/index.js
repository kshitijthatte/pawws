import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { signupService } from "../../services/authServices";

const Signup = () => {
  const { setAuth } = useAuth();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypedPassword: "",
  });
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const signupHandler = async () => {
    try {
      setAuth({
        isAuthenticated: false,
        user: "",
        token: "",
      });
      setError("");
      if (inputValues.retypedPassword === inputValues.password) {
        const response = await signupService(
          inputValues.firstName,
          inputValues.lastName,
          inputValues.email,
          inputValues.password
        );
        if (response.status === 201) {
          localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
          localStorage.setItem(
            "PAWWS_USER",
            JSON.stringify(response.data.createdUser)
          );
          setAuth(a => ({
            ...a,
            isAuthenticated: true,
            user: response.data.createdUser,
            token: response.data.encodedToken,
          }));
          navigate(`/`);
          toast.success(`Welcome, ${response.data.createdUser.firstName}`);
        }
      } else {
        setError("Passwords do not match.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error");
      setError(error.response.data.errors[0]);
    }
  };

  return (
    <div className="authentication-container">
      <div className="card input-group">
        <Link className="title-w-logo text-lg text-primary text-center" to="/">
          <img src="/assets/logo-colored.svg" className="nav-logo" />
          pawws - Sign Up
        </Link>
        {error && <p className="text-red text-center">{error}</p>}
        <div className="name-input">
          <input
            type="text"
            className="input"
            placeholder="First Name"
            value={inputValues.firstName}
            onChange={e =>
              setInputValues(v => ({ ...v, firstName: e.target.value }))
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            value={inputValues.lastName}
            onChange={e =>
              setInputValues(v => ({ ...v, lastName: e.target.value }))
            }
          />
        </div>
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
          placeholder="New Password"
          value={inputValues.password}
          onChange={e =>
            setInputValues(v => ({ ...v, password: e.target.value }))
          }
        />
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          value={inputValues.retypedPassword}
          onChange={e =>
            setInputValues(v => ({ ...v, retypedPassword: e.target.value }))
          }
        />
        <button className="btn btn-primary text-center" onClick={signupHandler}>
          Sign Up
        </button>

        <hr className="divider" />
        <Link className="btn outline-primary text-center" to="/login">
          Or Login Now!
        </Link>
      </div>
    </div>
  );
};

export default Signup;
