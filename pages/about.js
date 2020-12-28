import Layout from "../components/layouts/main"

const contents = [
  {
    year: "2020 -",
    location: "Berlin",
    job_title: "Full-stack Engineer",
    org: "Warashibe",
    tech: ["Node.js", "Next Dapp", "Next.js", "Firebase"],
    description: "Reprehenderit nulla culpa culpa quis id ea. Cupidatat in enim aliquip culpa esse sit id occaecat incididunt exercitation cupidatat velit. Qui duis do esse culpa occaecat. Labore exercitation ad ullamco est."
  },
  {
    year: "2018 - 2020",
    location: "Berlin",
    job_title: "Backend Engineer",
    org: "Lisk || Lightcurve",
    tech: ["Node.js", "PostgresSQL", "Express", "Socket.io", "Swagger"],
    description: "Reprehenderit nulla culpa culpa quis id ea. Cupidatat in enim aliquip culpa esse sit id occaecat incididunt exercitation cupidatat velit. Qui duis do esse culpa occaecat. Labore exercitation ad ullamco est."
  },
  {
    year: "2012 - 2018",
    location: "Berlin",
    job_title: "Tech journalist, Consulting",
    org: "Freelance",
    description: "Reprehenderit nulla culpa culpa quis id ea. Cupidatat in enim aliquip culpa esse sit id occaecat incididunt exercitation cupidatat velit. Qui duis do esse culpa occaecat. Labore exercitation ad ullamco est."
  },
]

const Page = ({}) => {
  return (
    <Layout>
      <div className="sm:px-4 px-3 mt-12">
        <div className="text-gray-800 mb-8 text-4xl font-bold">About</div>
        <div className="text-gray-800 mb-4 text-2xl font-bold">Work Experiences</div>
        {contents.map(item => (
          <div className="mb-6 text-gray-800">
            <div className="flex items-end flex-wrap">
              <div className="w-28">{item.year}</div>
              <div className="mr-3">{item.org}</div>
              <div className="text-gray-600 text-sm">{item.location}</div>
            </div>
            <div className="text-xl font-bold my-2">{item.job_title}</div>
            <div className="flex items-end flex-wrap">{!item.tech ?
            null : 
            item.tech.map(el => <div className="bg-gray-400 text-white px-3 mr-2 text-sm mt-1">{el}</div>)}
            {!item.tech ? null : <span className="text-xs">and more</span>}
            </div>
          </div>
        ))}
        <div className="text-gray-800 mt-8 mb-4 text-2xl font-bold">Education</div>
        <div className="mb-8">2000-2004 Hitotsubashi University, BA Social Sciences</div>
        <div>
          More on <a className="hover:bg-yellow-100 underline" target="_blank" href="https://www.linkedin.com/in/yukisato/">LinkedIn</a>
        </div>
      </div>
    </Layout>
  )
}
export default Page;