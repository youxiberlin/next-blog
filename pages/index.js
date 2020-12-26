import Layout from "../components/layouts/main"
import TopPosts from "../components/layouts/top-posts"
import { getAllPosts } from "../lib/api"

const HomePage = ({ allPosts }) => {
  const main = allPosts[0]
  return (
    <Layout>
      <TopPosts
        title={main.title}
        date={main.date}
      />
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