import Head from "next/head";
import Header from "../header";
import colors from "../../css/colors";

export default ({ children }) => {
  return (
    <div class="bg-gray-100">
      <main class="container mx-auto">
        <Head>
          <title>Yuki's blog</title>
        </Head>
        <Header />
        {children}
      </main>
    </div>
  )
}