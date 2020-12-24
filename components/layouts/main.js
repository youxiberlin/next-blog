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
    </main>
  )
}