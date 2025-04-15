import { HeaderContainer } from "./styles";
import IgniteLogo from "../../assets/ignite-logo.svg";
import { NavLink } from "react-router-dom";
import { Scroll, Timer } from "phosphor-react";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={IgniteLogo} alt="" />
      <nav>
        <NavLink title="Home" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink title="Historico" to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
