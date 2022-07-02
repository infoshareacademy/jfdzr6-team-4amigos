import { Link } from "react-router-dom";
import logo from "../../assets/img/logoOrange.png";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";

// styles
import { StyledNav, StyledLogo } from "./NavStyle";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo" />
      </Link>
      <Navigation />
      <MobileNavigation />
    </StyledNav>
  );
};
