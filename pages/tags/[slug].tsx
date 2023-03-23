import MDXContent from "@/lib/MDXContent"
import { PostMeta } from "@/lib/types"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import Postcard from "../../components/Postcard"

// TODO: Update this
export default function TagPage({
  slug,
  posts,
}: {
  slug: string
  posts: PostMeta[]
}) {
  const [searchValue, setSearchValue] = useState("")
  const [filteredPosts, setFilteredPosts] = useState([...posts])
  const searchRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      )
    )
  }, [searchValue, posts])

  function handleAutoSearch(e: any) {
    if (e.code === "Slash" && e.ctrlKey) {
      searchRef.current.focus()
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleAutoSearch)

    return () => document.removeEventListener("keydown", handleAutoSearch)
  }, [])
  function capitalizeFirstLetter(tag: string) {
    return tag.charAt(0).toUpperCase() + tag.slice(1)
  }
  return (
    <>
      <Head>
        <title># {capitalizeFirstLetter(slug)}</title>
      </Head>
      <div className="space-y-4">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className="dark:text-gray-400 md:text-base text-sm">
            <h1 className="text-xl">
              Posts related to{" "}
              <span className="text-orange-500 font-bold">#{slug}</span>
            </h1>
          </p>

          <input
            ref={searchRef}
            className="dark:bg-transparent border dark:border-gray-600 border-gray-200 rounded px-2 py-2 w-full md:w-1/2 focus:outline-none focus:!border-orange-600"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Press (CTRL + /) to search... "
          />
        </div>

        {filteredPosts.map((post) => (
          <Postcard key={post.title} post={post} />
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const posts = new MDXContent("posts")
    .getAllPosts()
    .filter((post) => post?.meta.tags?.includes(slug))
  return {
    props: {
      slug,
      posts: posts.map((post) => post?.meta),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = new MDXContent("posts").getAllPosts()
  const tags = new Set(posts.map((post) => post?.meta.tags).flat())
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }))

  return {
    paths,
    fallback: false,
  }
}
