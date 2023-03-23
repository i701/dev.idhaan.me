import { PostMeta } from "@/lib/types"
import Link from "next/link"

const Postcard = ({ post }: { post: PostMeta }) => {
  return (
    <div className="transition duration-150 p-4 w-full border rounded bg-white space-y-2 dark:bg-transparent dark:border-orange-800/50">
      <Link
        className="text-xl font-bold dark:text-white focus:outline-none focus:border-orange-600 focus:border-b-2  hover:border-b-2 hover:border-orange-600"
        href={`/post/${post.slug}`}
      >
        {post.title}
      </Link>
      <p className="text-sm text-gray-400">
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <p className="text-neutral-500 md:text-base text-sm">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 text-sm text-orange-500">
        {post.tags?.map((tag) => (
          <Link
            key={tag}
            className="focus:outline-none focus:underline"
            href={`/tags/${tag}`}
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Postcard
