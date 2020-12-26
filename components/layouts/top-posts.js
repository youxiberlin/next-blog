const TopPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div className="pl-2 py-2">
          <span className="text-sm">{post.date}</span>
          <h3 className="text-xl">{post.title}</h3> 
        </div>
      ))}
    </div>
  )
}

export default TopPosts;