import MDXContent from "@/lib/MDXContent"
import { PostMeta } from "@/lib/types"
import Head from "next/head"
import { KeyboardEvent, useEffect, useRef, useState } from "react"
import Postcard from "../components/Postcard"

const Home = ({ posts }: { posts: PostMeta[] }) => {
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

  return (
    <>
      <Head>
        <title>i701 | Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://dev.idhaan.me/api/og" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className={`space-y-4`}>
          <h1 className="text-5xl font-semibold text-orange-600">
            <span className="accent-line">Hello </span>
          </h1>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <p className="dark:text-gray-400 md:text-xl text-[1rem]">
              Welcome to by blog!
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
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = new MDXContent("posts")
    .getAllPosts()
    .slice(0, 9)
    .map((post) => post?.meta)
  return { props: { posts } }
}

export default Home
