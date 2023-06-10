type Props = {
  children?: string | React.ReactNode
  isDv?: boolean
}

export default function Blockquote(props: Props) {
  return (
    <>
      <blockquote
        className={`md:text-lg  pr-4  ${
          props.isDv
            ? "border-r-2 mr-[.10rem] border-orange-500/10"
            : "border-orange-500 bg-persian-orange/20 border-l-2 text-orange-500"
        }`}
      >
        {props.children}
      </blockquote>
    </>
  )
}
