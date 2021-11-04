import './SocialLinks.scss';

import React, { useState } from "react";
import getSocialLinks from "../../../Controllers/SocialLinksController";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
    const [links, setLinks] = useState(getSocialLinks())
    return <div className="social-links">
        {links.map((v, i) => <SocialLink key={i} {...v} />)}
    </div>
}

export default SocialLinks;