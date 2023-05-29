import { useScroll } from "framer-motion"
import { useEffect, useState } from "react"

function ArticleProgressBar() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      setProgress(latestValue)
    })
  }, [scrollYProgress])

  return (
    <div className="z-40 fixed top-16 left-0 w-full dark:bg-gray-800 bg-[#eaeaea]">
      <div
        className="h-[1.5px] bg-orange-500 transition"
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  )
}

export default ArticleProgressBar
