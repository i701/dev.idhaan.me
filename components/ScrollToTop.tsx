import {
  useAnimationControls,
  useScroll,
  motion,
  Variants,
} from "framer-motion"
import { useEffect } from "react"
import { ArrowLongUpIcon } from "@heroicons/react/24/solid"

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
}

const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show")
      } else {
        controls.start("hide")
      }
    })
  })

  return (
    <motion.button
      className="fixed shadow-2xl bg-white bottom-10 left-5 dark:bg-black dark:ring-orange-500 dark:ring-2 transition  rounded-full p-4"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <ArrowLongUpIcon className="h-6 w-6 text-orange-500" />
    </motion.button>
  )
}

export default ScrollToTopButton
