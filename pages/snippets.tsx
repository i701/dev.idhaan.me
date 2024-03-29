import MDXContent from "@/lib/MDXContent"
import { PostMeta } from "@/lib/types"
import Head from "next/head"
import Snippetcard from "../components/Snippetcard"

const Snippets = ({ snippets }: { snippets: PostMeta[] }) => {
  return (
    <>
      <Head>
        <title>Snippets</title>
        <meta
          property="og:image"
          content={`https://dev.idhaan.me/api/og?title=Snippets`}
        />
      </Head>
      <div className={`space-y-4`}>
        <h1 className="text-2xl md:text-4xl font-bold text-orange-600">
          <span className="accent-line ">Snippets</span>
        </h1>
        <p>Collection of useful snippets.</p>
        <div className="grid md:grid-cols-2">
          {snippets.map((snippet) => (
            <Snippetcard key={snippet.title} snippet={snippet} />
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const snippets = new MDXContent("snippets")
    .getAllPosts()
    .slice(0, 9)
    .map((post) => post?.meta)
  return { props: { snippets } }
}

export default Snippets
