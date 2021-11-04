import './Logo.scss';
import React from "react";
import { Link } from "react-router-dom";
import IconList from "../../../Helpers/IconList";
import UrlList from '../../../Helpers/UrlList';

const Logo = () => <Link to={UrlList.HOME} id="logo">
    <img src={`resources/${IconList.LOGO}`} />
</Link>

export default Logo;