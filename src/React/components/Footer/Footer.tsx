import './Footer.scss';

import React from "react"
import Copyright from "../Copyright/Copyright";
import SocialLinks from "../Social/SocialLinks";

const Footer = () => <footer>
    <div className="container">
        <SocialLinks />
        <Copyright />
    </div>
</footer>

export default Footer;