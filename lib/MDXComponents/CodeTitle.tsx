import { BsFileEarmarkCodeFill } from "react-icons/bs"
import {
  SiCss3,
  SiPython,
  SiGnubash,
  SiHtml5,
  SiReact,
  SiMarkdown,
  SiNextdotjs,
  SiVercel,
  SiTypescript,
} from "react-icons/si"
import { VscJson } from "react-icons/vsc"
import { IoLogoJavascript } from "react-icons/io5"
import { AiOutlineFileText, AiOutlineFolderOpen } from "react-icons/ai"
import { Space_Grotesk } from "next/font/google"

const spacegrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

type Props = {
  title?: string
  lang: string
}

export default function CodeTitle({ title, lang }: Props) {
  let Icon
  switch (lang) {
    case "html":
      Icon = SiHtml5
      break
    case "css":
      Icon = SiCss3
      break
    case "js":
      Icon = IoLogoJavascript
      break
    case "bash":
      Icon = SiGnubash
      break
    case "py":
      Icon = SiPython
      break
    case "json":
      Icon = VscJson
      break
    case "jsx":
      Icon = SiReact
      break
    case "text":
      Icon = AiOutlineFileText
      break
    case "md":
      Icon = SiMarkdown
      break
    case "next":
      Icon = SiNextdotjs
      break
    case "directory":
      Icon = AiOutlineFolderOpen
      break
    case "vercel":
      Icon = SiVercel
      break
    case "ts" || "tsx":
      Icon = SiTypescript
      break
    default:
      Icon = BsFileEarmarkCodeFill
      break
  }
  return (
    <div className={spacegrotesk.className}>
      <div className="bg-white text-darkSecondary dark:bg-darkSecondary dark:text-gray-200 rounded-t border-t border-l border-r px-3 dark:border-gray-800 flex items-center justify-between dark:bg-gray-900 dark:border-gray-200/60">
        <Icon className="w-4 h-4 rounded" />
        <p className="!my-0">{title || lang}</p>
      </div>
    </div>
  )
}
