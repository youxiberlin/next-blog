const TopPosts = ({ title, date }) => (
  <div class="pl-2 py-3">
    <span>{date}</span>
    <h3 class="text-xl">{title}</h3>
  </div>
)

export default TopPosts;