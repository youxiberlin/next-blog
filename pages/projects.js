import Layout from "../components/layouts/main"
import '@fortawesome/fontawesome-free/css/all.min.css'

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
      <div className="mt-12">
        <div className="mb-8 text-6xl font-bold">Projects</div>
        {contents.map(item => (
          <>
            <div className="mt-8 text-3xl">
              <a className="hover:bg-yellow-100" target="_blank" href={item.github}>
                {item.title}
                <i className="fab fa-github text-xl ml-3"></i>
              </a>
            </div>
            <div className="my-3">{item.description}</div>
            <div className="flex">
              {item.techstack.map(el => <div className="bg-purple-500 text-white mr-2 px-2">{el}</div>)}
            </div>
          </>
        ))}
      </div>
    </Layout>
  )
}
export default Page;