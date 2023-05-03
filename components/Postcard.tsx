import { PostMeta } from "@/lib/types"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Link from "next/link"
import { MouseEventHandler } from "react"

const Postcard = ({ post }: { post: PostMeta }) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    let target = event.currentTarget
    let { left, top } = target.getBoundingClientRect()

    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }

  return (
    <div
      className="group relative rounded-xl border border-white/10 bg-gray-900 md:px-8 md:py-8 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(233, 109, 14, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative transition duration-150 p-4 w-full space-y-2 dark:bg-transparent dark:border-orange-800/50">
        <Link
          className="md:text-3xl text-xl leading-relaxed font-bold dark:text-gray-400 focus:outline-none focus:border-orange-600 focus:border-b-2  hover:border-b-2 hover:border-orange-600"
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
        <p className="text-neutral-500 md:text-base text-[1rem] leading-relaxed">
          {post.excerpt}
        </p>
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
    </div>
  )
}

export default Postcard
