import Logo from "./Logo";
import Link from "next/link";
import Nav from "./nav";

export default () => (
  <header class="pt-4">
    <Link href="/">
      <a className="logo" href="/">
        <Logo />
      </a>
    </Link>
    <Nav />
  </header>
)