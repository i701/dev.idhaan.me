import Link from "next/link"
import type { SnippetMeta } from "@/src/snippetApi"

const Snippetcard = ({ snippet }: { snippet: SnippetMeta }) => {
  return (
    <div className="transition duration-150 p-4 border rounded bg-white space-y-2 dark:bg-transparent dark:border-orange-800/50">
      <Link
        className="text-xl font-bold dark:text-white focus:outline-none focus:border-orange-600 focus:border-b-2  hover:border-b-2 hover:border-orange-600"
        href={`snippet/${snippet.slug}`}
      >
        {snippet.title}
      </Link>
      <p className="text-sm text-gray-400">
        {new Date(snippet.date).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <p className="text-neutral-500 md:text-base text-sm">{snippet.excerpt}</p>
    </div>
  )
}

export default Snippetcard
