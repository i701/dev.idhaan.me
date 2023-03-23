import { ReactNode } from "react"

interface MemeSoundProps {
  onClick: () => void
  onMouseLeave: () => void
  children: ReactNode
}

const Memesound = ({ onClick, onMouseLeave, children }: MemeSoundProps) => {
  return (
    <button
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      className="dark:text-gray-200
      focus:bg-orange-200
      dark:focus:bg-orange-800/50
        focus:stripes stripes-opacity-10
        h-16 bg-orange-400/20 w-full rounded
        p-2 hover:bg-orange-800/20
        flex gap-2 justify-center items-center
        focus:ring-2 focus:ring-orange-600/40
        focus:outline-none dark:focus:outline-none
        dark:focus:ring-2 dark:ring-orange-800"
    >
      {children}
    </button>
  )
}

export default Memesound
