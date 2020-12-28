import { useState } from "react"
import Layout from "../components/layouts/main"
import TopDevlog from "../components/layouts/top-devlog"
import { getAllDevlog } from "../lib/api"

const Devlog = ({ allPosts }) => {
  const [morePosts, setMorePosts] = useState(false)
  const topPosts = allPosts.length <=20 ? allPosts : allPosts.slice(0, 20)
  return (
    <Layout>
      <TopDevlog
        posts={!morePosts ? topPosts : allPosts}
      />
      <div
        onClick={() => setMorePosts(!morePosts)}
        className={allPosts.length > topPosts.length && !morePosts ? 'block' : 'hidden'}>
        show more
      </div>
    </Layout>
  )
}
export default Devlog;

export async function getStaticProps() {
  const allPosts = getAllDevlog([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}