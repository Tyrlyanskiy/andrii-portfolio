"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LogoLink from "../ui/LogoLink";
import { links } from "./constants";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <DialogTitle hidden />
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <LogoLink />
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.name}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
