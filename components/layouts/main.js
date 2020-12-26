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
      main {
        background-color: white;
        font-size: 18px;
      }
      @media (min-width: 500px) {
        main {
          max-width: 48rem;
          margin: auto;
          padding: 10px 0;
        }
      }
    `}
    </style>
    </main>
  )
}