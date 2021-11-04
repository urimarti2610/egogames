import React from "react";
import ISocialLinks from "../../../Interfaces/ISocialLinks";

const SocialLink = (props: ISocialLinks) => <a href={props.link} title={props.name} target="_blank">
    <img src={`resources/${props.icon}`} alt={props.name} />
</a>

export default SocialLink;