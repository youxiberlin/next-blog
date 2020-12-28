import Layout from "../components/layouts/main"

const contents = [
  {
    title: "Blog",
    github: "https://github.com/youxiberlin/next-blog",
    techstack: ["Next.js", "Tailwindcss", "remark", "Vercel"],
    description: "I developed my former blog with Jekyll and published on a gihub page. I wanted to replace it with the other modern techstacks that I am more familiar with. So, I developed this blog-oriented static profile site, using Next.js. Deployed with vercel."
  },
  {
    title: "Tibber Project",
    github: "https://github.com/youxiberlin/Tibber-Project",
    techstack: ["Next.js", "Tibber API"],
    description: "The aim of this on-going small side project is that I wanted to develop a custom application that can leverage the power of Tibber API. Tibber is a digital electricity supplier that offers technological solutions to minimize their customers' consumption and costs."
  },
]

const Page = ({}) => {
  return (
    <Layout>
      <div className="sm:px-4 px-3 mt-12">
        <div className="mb-8 text-5xl font-bold text-gray-800">Projects</div>
        {contents.map(item => (
          <>
            <div className="mt-8 text-3xl">
              <a className="hover:bg-yellow-100 text-gray-800" target="_blank" href={item.github}>
                {item.title}
                <i className="fab fa-github text-xl ml-3"></i>
              </a>
            </div>
            <div className="my-3 text-gray-800">{item.description}</div>
            <div className="flex">
              {item.techstack.map(el => <div className="border border-gray-200 bg-gray-50 text-gray-600 mr-2 px-2">{el}</div>)}
            </div>
          </>
        ))}
      </div>
    </Layout>
  )
}
export default Page;