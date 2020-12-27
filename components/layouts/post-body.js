import markdownStyles from './markdown-styles.module.css'
export default function PostBody({ content }) {
  return (
    <div className="px-3 mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}