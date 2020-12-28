import Head from "next/head";
import Header from "../header";

export default ({ children }) => {
  return (
    <>
      <main className="max-w-3xl mb-10 container mx-auto">
        <Head>
          <title>Yuki's blog</title>
        </Head>
        <Header />
        {children}
      </main>
    </>
  )
}