import Head from "next/head";
import Header from "../header";
import colors from "../../css/colors";

export default ({ children }) => {
  return (
    <main>
      <Head>
        <title>Yuki's blog</title>
      </Head>
      <style jsx global>
        {colors}
      </style>
      <Header />
      {children}
      <style jsx>{`
      @media (min-width: 500px) {
        main {
          max-width: 42rem;
          margin: auto;
          padding: 10px 0;
        }
      }
    `}
    </style>
    </main>
  )
}