import type { GetStaticProps, GetStaticPaths } from "next"
import Image from "next/image"
import Head from "next/head"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import { getPostFromSlug, getSlugs, PostMeta } from "@/src/postApi"
// import YouTube from "@/src/components/youTube";
import "highlight.js/styles/atom-one-dark.css"
import { MDXComponents } from "../components/MDXComponents"

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
}

const PostPage = ({ post }: { post: MDXPost }) => {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <article
        className="prose-sm md:prose-lg
        prose-pre:bg[#282c34]
        prose-pre:px-0
        prose-li:list-disc
        prose-a:text-orange-600
        prose-code:bg-gray-200/80
        prose-code:dark:bg-slate-600/40
        prose-code:dark:text-slate-400
        prose-code:px-1
        prose-code:rounded
        prose-code:md:text-base
        prose-code:text-xs
        "
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-500 ">
          {post.meta.title}
        </h1>
        <MDXRemote {...post.source} components={MDXComponents} />
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { content, meta } = getPostFromSlug(slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  })

  return { props: { post: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
