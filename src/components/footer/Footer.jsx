import { Link } from "react-router-dom";
import githubLogo from "../../assets/img/githubLogo.png";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">
            <img src={githubLogo} alt="Logo" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};
