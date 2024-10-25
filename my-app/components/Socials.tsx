import Link from "next/link";

import { FaLinkedin, FaGithub, FaXing } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    name: "github",
    path: "https://github.com/Tyrlyanskiy",
  },
  {
    icon: <FaLinkedin />,
    name: "linkedin",
    path: "https://www.linkedin.com/in/andrii-diachenko-117a2b39/",
  },
  {
    icon: <FaXing />,
    name: "xing",
    path: "https://www.xing.com/profile/Andrii_Diachenko/web_profiles",
  },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => {
        return (
          <Link href={social.path} key={social.name} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
