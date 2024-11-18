import Link from "next/link";

import { FaLinkedin, FaGithub, FaXing } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    name: "github",
    path: process.env.MY_GITHUB || "",
  },
  {
    icon: <FaLinkedin />,
    name: "linkedin",
    path: process.env.MY_LINKEDIN || "",
  },
  {
    icon: <FaXing />,
    name: "xing",
    path: process.env.MY_XING || "",
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
          <Link
            href={social.path}
            key={social.name}
            target="_blank"
            className={iconStyles}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
