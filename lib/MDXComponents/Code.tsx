type Props = {
  children?: string | React.ReactNode
}

export default function Code(props: Props) {
  return (
    <>
      {typeof props.children === "string" ? (
        <code
          className={`text-gray-800 dark:text-gray-200 before:text-gray-500 after:text-gray-500`}
        >
          `{props.children}`
        </code>
      ) : (
        <code className="">{props.children}</code>
      )}
    </>
  )
}
