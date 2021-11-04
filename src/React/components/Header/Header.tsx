import './Header.scss';

import React from "react"
import { NavLink } from "react-router-dom"
import UrlList from "../../../Helpers/UrlList";
import Logo from "../Logo/Logo";

const Header = () => <header>
    <Logo />
    <NavLink to={UrlList.HOME} exact>Home</NavLink>
    <NavLink to={UrlList.GAMES} exact>Catálogo</NavLink>
</header>

export default Header;