import PostTitle from "./post-title"

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
    <PostTitle>
      {title}
    </PostTitle>
    <div className="text-lg text-center">{date}</div>
    </>
  )
}