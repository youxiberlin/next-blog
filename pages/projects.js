import Layout from "../components/layouts/main"

const contents = [
  {
    title: "Blog",
    github: "https://github.com/youxiberlin/next-blog",
    techstack: ["Next.js", "Tailwindcss"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
  },
  {
    title: "Tibber Projects",
    github: "https://github.com/youxiberlin/Tibber-Project",
    techstack: ["Next.js"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
  },
]

const Page = ({}) => {
  return (
    <Layout>
      <div className="mt-12">
        <div className="mb-8 text-6xl font-bold">Projects</div>
        {contents.map(item => (
          <>
            <div className="mt-8 text-4xl">
              <a className="hover:bg-yellow-100" target="_blank" href={item.github}>
                {item.title}
              </a>
            </div>
            <div className="my-3">{item.description}</div>
            <div className="flex">
              {item.techstack.map(el => <div className="bg-black text-white mr-2 px-2">{el}</div>)}
            </div>
          </>
        ))}
      </div>
    </Layout>
  )
}
export default Page;