import Logo from "./Logo";
import Link from "next/link";
import Nav from "./nav";

export default () => (
  <header className="pt-4">
    <Link href="/">
      <a className="logor" href="/">
        <Logo />
      </a>
    </Link>
    <Nav />
  </header>
)