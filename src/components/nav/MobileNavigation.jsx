import { NavLinks } from "./NavLinks";
import { StyledMobileNavLinks } from "./NavStyle";
import { GiHamburgerMenu } from "react-icons/gi";

export const MobileNavigation = () => {
  return (
    <StyledMobileNavLinks>
      <GiHamburgerMenu size="40px" color="white" />
      <NavLinks />
    </StyledMobileNavLinks>
  );
};
