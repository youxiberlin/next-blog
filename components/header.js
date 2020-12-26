import Logo from "./Logo";
import Link from "next/link";

export default () => (
  <header>
    <Link href="/">
      <a className="logo" href="/">
        <Logo />
      </a>
    </Link>
    <nav>
      <a className="src" target="_blank" href="https://github.com/youxiberlin/next-blog">
          Source
      </a>
      <a className="follow" target="_blank" href="https://twitter.com/yuki_sat">
          Follow Me
      </a>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      a.logo {
        text-decoration: none;
        color: #000;
        display: inline-flex;
        transition: 150ms background-color ease;
        padding: 5px;
      }

      @media (any-hover: hover) {
        a.logo:hover {
          background-color: var(--link-highlight);
        }

        a.logo:active {
          background-color: #fff445;
        }
      }
      @media (min-width: 500px) {
        nav {
          padding: 0;
        }
      }
    `}
    </style>
  </header>
)