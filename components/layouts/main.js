import Head from "next/head";
import Header from "../header";

export default ({ children }) => {
  return (
    <main>
      <Head>
        <title>Yuki's blog</title>
      </Head>
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