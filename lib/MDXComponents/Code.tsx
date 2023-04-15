import { Space_Mono } from "next/font/google"

type Props = {
  children?: string | React.ReactNode
}
const space = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export default function Code(props: Props) {
  return (
    <>
      {typeof props.children === "string" ? (
        <code
          className={`${space.className}!bg-gray-500 font-medium text-gray-800 dark:text-gray-200 rounded before:text-gray-500 after:text-gray-500`}
        >
          `{props.children}`
        </code>
      ) : (
        <code className="">{props.children}</code>
      )}
    </>
  )
}
