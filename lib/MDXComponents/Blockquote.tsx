type Props = {
  children?: string | React.ReactNode
}

export default function Blockquote(props: Props) {
  return (
    <>
      <blockquote className="md:text-lg text-orange-500 bg-persian-orange/20 rounded-sm pr-4 py-4  border-l-orange-500 border-l-2">
        {props.children}
      </blockquote>
    </>
  )
}
