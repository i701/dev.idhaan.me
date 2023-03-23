import type { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
// import YouTube from "@/src/components/youTube";
import "highlight.js/styles/atom-one-dark.css"
import { MDXPost } from "@/lib/types"
import MDXContent from "@/lib/MDXContent"
import { MDXComponents } from "../components/MDXComponents"

const PostPage = ({ post }: { post: MDXPost }) => {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
        <meta
          property="og:image"
          content={`https://dev.idhaan.me/api/og?title=${post.meta.title}`}
        />
      </Head>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-500 my-4">
        {post.meta.title}
      </h1>
      <article
        className="prose-sm md:prose-lg
        prose-pre:!m-0
        prose-li:list-disc
        prose-a:text-orange-600
        "
      >
        <MDXRemote {...post.source} components={MDXComponents} />
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { content, meta } = await new MDXContent("posts").getPostFromSlug(slug)
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
  const paths = new MDXContent("posts")
    .getSlugs()
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
