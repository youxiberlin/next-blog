import Link from 'next/link'

const TopPosts = ({ posts }) => {
  return (
    <div className="mt-8">
      <div className="pl-2 py-2 text-gray-800 sm:text-3xl text-4xl font-bold">Journal</div>
      {posts.map(post => (
        <div className="pl-2 py-2" key={post.slug}>
          <span className="text-sm text-gray-600">{post.date}</span>
          <Link href={`/posts/${post.slug}`}>
            <h3 className="text-gray-800 text-xl hover:bg-pink-200 cursor-pointer tracking-wide">{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TopPosts;