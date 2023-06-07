import { PostMeta } from "@/lib/types"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Link from "next/link"
import { MouseEventHandler, useEffect } from "react"
import localFont from "next/font/local"
import { useGlobalContext } from "../context"

const typewriterBold = localFont({
  src: "../public/fonts/MVTypewriter_reg.ttf",
})

const Postcard = ({ post }: { post: PostMeta }) => {
  const { isDhivehi, setIsDhivehi } = useGlobalContext()
  useEffect(() => {
    if (post.dv) {
      setIsDhivehi(true)
    }
  }, [post.dv, setIsDhivehi])

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
      className="group relative rounded-xl border dark:border-white/10 dark:bg-gray-900 md:px-8 md:py-8"
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
      <div
        className={`${
          post.dv && "text-right"
        } relative transition duration-150 p-4 w-full space-y-2 dark:bg-transparent dark:border-orange-800/50`}
      >
        <Link
          className={`${post.dv === true ? typewriterBold.className : ""}
          text-2xl md:text-2xl text-black font-medium md:leading-loose sm:leading-normal transition duration-150 dark:text-gray-400 focus:outline-none focus:border-orange-600 focus:border-b-2  hover:text-orange-500 dark:hover:text-orange-600`}
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
        <div
          className={`flex ${
            post.dv && "justify-end"
          } flex-wrap gap-2 text-sm text-orange-500`}
        >
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
