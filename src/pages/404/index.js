import { Link } from "react-router-dom";
import "./styles.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Lost your way?</h1>
      <p>Sorry, we can't find that page.</p>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
