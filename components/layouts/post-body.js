import markdownStyles from './markdown-styles.module.css'
export default function PostBody({ content }) {
  return (
    <div className="sm:px-2 md:px-3 px-6 mx-auto tracking-wide text-gray-700">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}