import Link from "next/link";

const LogoLink = () => {
  return (
    <Link href="/">
      <h1 className="text-4xl font-semibold">
        Andrii<span className="text-accent">.</span>
      </h1>
    </Link>
  );
};

export default LogoLink;
