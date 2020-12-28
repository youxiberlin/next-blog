import Head from "next/head";
import Header from "../header";
import Footer  from "../footer";

const Main = ({ children }) => {
  return (
    <>
      <main className="max-w-3xl mb-10 container mx-auto flex flex-col">
        <Head>
          <title>Yuki's blog</title>
        </Head>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        {/* <Footer /> */}
      </main>
    </>
  )
}

export default Main;
