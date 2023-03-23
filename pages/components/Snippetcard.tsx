import { PostMeta } from "@/lib/types"
import Link from "next/link"

const Snippetcard = ({ snippet }: { snippet: PostMeta }) => {
  return (
    <Link
      href={`snippet/${snippet.slug}`}
      className="transition
          duration-150 w-full p-4 ring-1 hover:bg-neutral-50 dark:focus:bg-neutral-900 ring-gray-300
        hover:ring-gray-400 dark:ring-[#444] bg-white dark:bg-transparent
        dark:hover:bg-neutral-900  dark:hover:ring-[#555] flex flex-col gap-2 rounded
          focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-800
        "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold dark:text-white">{snippet.title}</h1>
        {/* <LinkIcon className="h-5 w-5" /> */}
      </div>
      <p className="text-sm text-gray-400 dark:text-orange-500">
        {new Date(snippet.date).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <p className="text-neutral-500">{snippet.excerpt}</p>
    </Link>
  )
}

export default Snippetcard
