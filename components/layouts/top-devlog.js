import Link from 'next/link'

const TopPosts = ({ posts }) => {
  return (
    <div className="sm:mt-6 mt-8">
      <div className="pl-2 py-2 text-gray-800 sm:text-3xl text-4xl font-bold">Devlog</div>
      {posts.map(post => (
        <div className="flex sm:flex-col pl-2 py-2" key={post.slug}>
          <div className="text-gray-600 text-lg mr-3 font-bold">{post.date}</div>
          <Link href={`/devlog/${post.slug}`}>
            <h3 className="font-bold underline text-gray-600 text-xl hover:bg-pink-200 cursor-pointer tracking-wide">{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TopPosts;