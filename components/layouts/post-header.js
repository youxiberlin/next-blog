export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
    <h1 className="text-gray-800 text-4xl font-bold text-center">
      {title}
    </h1>
    <div className="mt-2 text-gray-600 text-base text-center">{date}</div>
    </>
  )
}