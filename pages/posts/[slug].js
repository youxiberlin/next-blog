import { useRouter } from 'next/router'
import Head from "next/head"
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from "../../components/layouts/main"
import PostHeader from "../../components/layouts/post-header"
import PostBody from "../../components/layouts/post-body"

export default function Post({ post, content, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {router.isFallback ? (
        <div>loading..</div>
      ) : (
        <>
        <article className="mt-12">
          <Head>
            <title>
              {post.title}
            </title>
          </Head>
          <PostHeader {...post} dir="posts"/>
          <PostBody content={content}/>
        </article>
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
      },
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
