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
import { MDXComponents } from "@/lib/MDXComponents"

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
      <div className="max-w-5xl pt-4 px-4 mx-auto">
        <div className="text-center mb-8">
          <h1 className="mt-4 text-4xl text-black dark:text-zinc-400 font-medium sm:text-5xl md:text-6xl md:leading-normal sm:leading-normal">
            <span>{post.meta.title}</span>
          </h1>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center">
              <div className="ml-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Published on{" "}
                  {new Date(post.meta.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article
        className="prose-sm md:prose-lg
        prose-pre:!m-0
        prose-li:list-disc
        prose-li:leading-loose
        prose-li:text-[1rem]
        prose-a:no-underline
        prose-a:font-bold
        prose-code:font-mono
        prose-h1:text-base
        prose-headings:leading-normal
        prose-p:leading-loose prose-img:rounded-xl
        prose-p:text-[1rem]
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
