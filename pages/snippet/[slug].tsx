import type { GetStaticPaths, GetStaticPropsContext } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import { MDXComponents } from "../components/MDXComponents"
import "highlight.js/styles/atom-one-dark.css"
import Head from "next/head"
import MDXContent from "@/lib/MDXContent"
import { MDXPost } from "@/lib/types"

export default function SnippetPage({ snippet }: { snippet: MDXPost }) {
  return (
    <>
      <Head>
        <title>{snippet.meta.title}</title>
        <meta
          property="og:image"
          content={`https://dev.idhaan.me/api/og?title=${snippet.meta.title}`}
        />
      </Head>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-500 my-4">
        {snippet.meta.title}
      </h1>
      <article
        className="prose-sm md:prose-lg
        prose-pre:!m-0
        prose-li:list-disc
        prose-a:text-orange-600
        "
      >
        <MDXRemote {...snippet.source} components={MDXComponents} />
      </article>
    </>
  )
}

type StaticProps = GetStaticPropsContext & {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: StaticProps) {
  const { slug } = params as { slug: string }
  // const { content, meta } = getSnippetFromSlug(slug)
  const { content, meta } = await new MDXContent("snippets").getPostFromSlug(
    slug
  )

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  })

  return { props: { snippet: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new MDXContent("snippets")
    .getSlugs()
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
