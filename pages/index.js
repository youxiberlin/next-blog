import { useState } from "react"
import Layout from "../components/layouts/main"
import TopPosts from "../components/layouts/top-posts"
import TopIntro from "../components/top-intro"
import { getAllPosts } from "../lib/api"

const HomePage = ({ allPosts }) => {
  const [morePosts, setMorePosts] = useState(false)
  const topPosts = allPosts.length <=10 ? allPosts : allPosts.slice(0, 10)
  return (
    <Layout>
      <TopIntro />
      <TopPosts
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
export default HomePage;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}