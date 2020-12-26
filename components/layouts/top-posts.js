const TopPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div class="pl-2 py-2">
          <span class="text-sm">{post.date}</span>
          <h3 class="text-xl">{post.title}</h3> 
        </div>
      ))}
    </div>
  )
}

export default TopPosts;