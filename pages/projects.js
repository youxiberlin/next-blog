import Layout from "../components/layouts/main"
import { contents } from "../lib/data/projects"

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
            <div className="flex flex-wrap">
              {item.techstack.map(el => <div className="sm-tag-green">{el}</div>)}
              {item.skill.map(el => <div className="sm-tag-blue">{el}</div>)}
              {item.area.map(el => <div className="sm-tag-yellow">{el}</div>)}
            </div>
          </>
        ))}
      </div>
    </Layout>
  )
}
export default Page;