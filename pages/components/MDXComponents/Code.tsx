type Props = {
  children?: string | React.ReactNode
}

export default function Code(props: Props) {
  return (
    <>
      {typeof props.children === "string" ? (
        <code className="!bg-gray-30 text-gray-800 dark:text-gray-200 font-bold p-0.5 rounded before:text-gray-500 after:text-gray-500">
          `{props.children}`
        </code>
      ) : (
        <code className="">{props.children}</code>
      )}
    </>
  )
}
