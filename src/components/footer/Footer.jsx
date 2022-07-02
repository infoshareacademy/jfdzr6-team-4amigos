import githubLogo from "../../assets/img/githubLogo.png";

// styles
import { FooterContainer, StyledFooter } from "./FooterStyle";
import { StyledUl } from "./FooterStyle";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 4Amigos {currentYear} Wszystkie prawa zastrzeżone</p>
      <StyledUl>
        <li>
          <a href="https://github.com/mar-kalinowski" target="_blank">
            <img src={githubLogo} alt="GitHub" /> Marcin Kalinowski
          </a>
        </li>
        <li>
          <a href="https://github.com/mlesiak" target="_blank">
            <img src={githubLogo} alt="GitHub" /> Michał Lesiak
          </a>
        </li>
        <li>
          <a href="https://github.com/krzysztof-lyczko" target="_blank">
            <img src={githubLogo} alt="GitHub" /> Krzysztof Łyczko
          </a>
        </li>
        <li>
          <a href="https://github.com/karol-zakrzewski" target="_blank">
            <img src={githubLogo} alt="GitHub" /> Karol Zakrzewski
          </a>
        </li>
      </StyledUl>
    </StyledFooter>
  );
};
