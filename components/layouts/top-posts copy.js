const TopPosts = ({ title, date }) => (
  <div className="pl-2 py-3">
    <span>{date}</span>
    <h3 className="text-xl">{title}</h3>
  </div>
)

export default TopPosts;