import Link from 'next/link'

const TopPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div className="pl-2 py-2" key={post.slug}>
          <span className="text-sm">{post.date}</span>
          <Link href={`/posts/${post.slug}`}>
            <h3 className="text-xl hover:bg-pink-200 cursor-pointer">{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TopPosts;