import IconList from "../Helpers/IconList";
import SocialList from "../Helpers/SocialList";
import ISocialLinks from "../Interfaces/ISocialLinks";

const SocialLinksData: ISocialLinks[] = [
  {
    name: SocialList.INSTAGRAM,
    link: "https://www.instagram.com/egogames_esports/",
    icon: IconList.INSTAGRAM,
  },
  {
    name: SocialList.FACEBOOK,
    link: "https://www.facebook.com/egogamesES/",
    icon: IconList.FACEBOOK,
  },
  {
    name: SocialList.LINKEDIN,
    link: "https://www.linkedin.com/company/egogames/",
    icon: IconList.LINKEDIN,
  },
  {
    name: SocialList.TWITTER,
    link: "https://twitter.com/eGoGamesESP",
    icon: IconList.TWITTER,
  },
];

export default SocialLinksData;
