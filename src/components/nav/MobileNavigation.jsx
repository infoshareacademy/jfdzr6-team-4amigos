import { NavLinks } from "./NavLinks";
import { StyledMobileNavLinks } from "./NavStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu size="40px" color="white" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <GrClose size="40px" color="black" onClick={() => setOpen(!open)} />
  );

  return (
    <>
      {open ? closeIcon : hamburgerIcon}
      <StyledMobileNavLinks>
        <NavLinks />
      </StyledMobileNavLinks>
    </>
  );
};
