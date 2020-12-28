export default function PostHeader({ title, date, dir, slug }) {
  const url = `https://blog.youxiberlin.vercel.app/${dir}/${slug}`
  return (
    <>
    <h1 className="text-gray-800 text-4xl font-bold text-center">
      {title}
    </h1>
    <div className="mt-2 text-gray-600 text-base text-center">{date}</div>
    <div className="text-center">
      <a className="twitter-share-button text-xl"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}>
        <i className="fab fa-twitter-square"></i>
      </a>
    </div>
    </>
  )
}