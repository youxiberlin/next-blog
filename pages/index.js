import Layout from "../components/layouts/main"
import TopPosts from "../components/layouts/top-posts"
import { getAllPosts } from "../lib/api"

const HomePage = ({ allPosts }) => {
  return (
    <Layout>
      <div className="mt-6 mb-3 pl-2">
        <div className="text-2xl">
        Hello, my name is Yuki.<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        </div>
      </div>
      <TopPosts
        posts={allPosts}
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