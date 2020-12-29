import Layout from "../components/layouts/main"
import { contents, skill } from "../lib/data/about"

const Page = ({}) => {
  return (
    <Layout>
      <div className="sm:px-4 px-3 mt-12">
        <div className="text-gray-800 mb-8 text-5xl font-bold">About</div>
        <div className="text-gray-800 mb-4 text-2xl font-bold">Work Experiences</div>
        {contents.map(item => (
          <div className="mb-6 text-gray-800">
            <div className="flex items-end flex-wrap">
              <div className="w-28 font-bold">{item.year}</div>
              <div className="mr-3 font-bold w-36">{item.org}</div>
              <div className="text-gray-600 text-sm">{item.location}</div>
            </div>
            <div className="text-lg my-2">{item.job_title}</div>
            <div className="flex items-end flex-wrap">{!item.tech ?
            null :
            item.tech.map(el => <div className="border border-gray-200 bg-gray-50 text-gray-600 px-3 mr-2 text-sm mt-1">{el}</div>)}
            {!item.tech ? null : <span className="text-xs">and more</span>}
            </div>
          </div>
        ))}
        <div className="text-gray-800 mt-8 mb-4 text-2xl font-bold">Education</div>
        <div className="mb-8">2000-2004 Hitotsubashi University, BA Social Sciences</div>
        <div className="text-gray-800 mt-8 mb-4 text-2xl font-bold">Skills</div>
        <div className="flex items-end flex-wrap">
          {skill.general.map(item => <div className="border border-blue-200 bg-blue-50 text-blue-600 px-3 mr-2 text-sm mt-1">{item}</div>)}
          {skill.lng.map(item => <div className="border border-green-200 bg-green-50 text-green-600 px-3 mr-2 text-sm mt-1">{item}</div>)}
        </div>
        <div className="mt-8">
          More on <a className="hover:bg-yellow-100 underline" target="_blank" href="https://www.linkedin.com/in/yukisato/">LinkedIn</a>
        </div>
      </div>
    </Layout>
  )
}
export default Page;