import type { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/atom-one-dark.css"
import { MDXPost } from "@/lib/types"
import MDXContent from "@/lib/MDXContent"
import { MDXComponents } from "@/lib/MDXComponents"

import localFont from "next/font/local"
import { useEffect, useRef, useState } from "react"
const typewriterNormal = localFont({
  src: "../../public/fonts/mvtyper.ttf",
})
const typewriterSemiBold = localFont({
  src: "../../public/fonts/mvtypewriter_semibold.ttf",
})
import kv from "@vercel/kv"

import { Space_Grotesk } from "next/font/google"
import { useRouter } from "next/router"
import CoolAvatarBanner from "@/components/CoolAvatarBanner"
import ScrollToTopButton from "@/components/ScrollToTop"
import ArticleProgressBar from "@/components/ProgressBar"
import SocialShare from "@/components/SocialShare"
const spacegrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const PostPage = ({ post, FULL_URL }: { post: MDXPost; FULL_URL: string }) => {
  const [isDv, setIsDv] = useState<boolean>(false)
  const [views, setViews] = useState<number>(0)
  const router = useRouter()

  useEffect(() => {
    fetch(`/api/views/${post.meta.slug}`)
      .then((response) => response.json())
      .then((data) => {
        // set views in state
        setViews(data.views)
      })
  }, [post.meta.slug])

  useEffect(() => {
    if (post.meta.dv === true) {
      setIsDv(true)
    }
  }, [post.meta.dv])
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
        <meta
          property="og:image"
          content={`https://dev.idhaan.me/api/og?title=${post.meta.title}`}
        />
      </Head>
      <ArticleProgressBar />
      <div className="max-w-xl pt-4 px-4 mx-auto">
        <div
          className={`${
            isDv ? "text-right" : "text-center"
          } mb-8 flex flex-col items-center justify-center`}
        >
          <h1
            className={`
            ${
              isDv === true
                ? typewriterSemiBold.className
                : spacegrotesk.className
            }
            ${isDv === true ? "leading-[42px] font-[700]" : "font-bold"}
             mt-4 text-3xl md:text-4xl text-black dark:text-zinc-400 md:leading-loose sm:leading-normal`}
          >
            {isDv ? post.meta.dvTitle : post.meta.title}
            {/* <pre>{JSON.stringify({ isDv }, null, 2)}</pre> */}
          </h1>
          <div className="flex items-center justify-center mt-4">
            <div className="border dark:border-gray-700 p-2 rounded text-gray-500 dark:text-gray-400 text-sm flex gap-2 items-center">
              <div className="">
                <p>
                  Published on{" "}
                  {new Date(post.meta.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}{" "}
                </p>
              </div>
              |
              <div className="border dark:border-gray-700 rounded px-2 dark:bg-orange-500/20 bg-orange-100 flex gap-2 items-center">
                <p className="">views - </p>
                <p className="text-orange-500 font-bold">
                  {Intl.NumberFormat("en-us").format(views)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <CoolAvatarBanner />
          </div>
        </div>
      </div>
      <article
        className={`${
          isDv === true ? typewriterNormal.className : ""
        } prose-sm md:prose-lg max-w-xl mx-auto
        prose-pre:!m-0
        prose-li:list-disc
        prose-ul:list-inside
        prose-li:leading-loose
        prose-li:text-orange-500
        prose-a:no-underline
        prose-a:font-bold
        prose-code:font-mono
        prose-h1:text-base
        prose-headings:leading-normal
        prose-img:rounded
        prose-img:my-0
        prose-video:my-0
        prose-p:leading-loose
        ${
          isDv === true
            ? "md:prose-p:text- prose-p:text-[20px] prose-li:text-[20px]"
            : "prose-p:text-[1rem] prose-li:text-[1rem]"
        }
        ${isDv === true ? "text-right tracking-wider" : ""}
        `}
        style={{
          direction: `${isDv === true ? "rtl" : "ltr"}`,
        }}
      >
        <MDXRemote {...post.source} components={MDXComponents} />
        <ScrollToTopButton />
        <SocialShare full_url={FULL_URL} />
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const BASE_URL = `http://dev.idhaan.me/post/`
  const { slug } = params as { slug: string }
  const FULL_URL = BASE_URL + slug
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

  return {
    props: {
      FULL_URL,
      post: { source: mdxSource, meta },
    },
  }
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
