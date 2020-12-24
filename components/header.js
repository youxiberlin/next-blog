import Logo from "./Logo";
import Link from "next/link";

export default () => (
  <header>
    <Link href="/">
      <Logo />
    </Link>
    <nav>
      {/* <a className="src" target="_blank" href="https://github.com/rauchg/blog">
          Source
      </a> */}
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
      @media (min-width: 500px) {
        header {
          max-width: 42rem;
          margin: auto;
          padding: 10px 0;
        }

        nav {
          padding: 0;
        }
      }
    `}
    </style>
  </header>
)