"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ILinkItem } from "./constants";

const NavigationItem = (link: ILinkItem) => {
  const pathname = usePathname();
  return (
    <Link
      href={link.path}
      key={link.path}
      className={`${
        link.path === pathname && "text-accent border-b-2 border-accent"
      } capitalize font-medium hover:text-accent transition-all`}
    >
      {link.name}
    </Link>
  );
};

export default NavigationItem;
