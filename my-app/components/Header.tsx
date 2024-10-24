import Link from "next/link";
import Navigation from "./Navigation";
import { Button } from "./ui/button";
// import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-20 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Andrii<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*Mobile navigation */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
