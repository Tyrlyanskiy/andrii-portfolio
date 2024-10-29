import Link from "next/link";

import Navigation from "./Nav/Navigation";
import MobileNavigation from "./Nav/MobileNavigation";

import LogoLink from "./ui/LogoLink";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <LogoLink />
        {/*Desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*Mobile navigation */}
        <div className="xl:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
