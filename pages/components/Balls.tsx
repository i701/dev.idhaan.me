import { Space_Mono } from "next/font/google"
import Image from "next/image"
const space = Space_Mono({ weight: "400", subsets: [] })

const OhBalls = () => {
  return (
    <div
      className={`${space.className} rounded transition duration-150 px-4 w-full h-screen flex flex-col space-y-4 pt-4 md:pb-6 items-center justify-center`}
    >
      <h3 className="md:text-2xl font-bold text-xl text-center">
        Oh balls... What did the server do?
      </h3>
      <Image
        src="/panic.gif"
        alt="My server had a stroke."
        blurDataURL="/panic.gif"
        placeholder="blur"
        width={640}
        height={340}
        className="ring-2 rounded ring-gray-500"
      />
      <div className="dark:text-orange-500 md:text-base border-l-2 space-y-2 border-orange-500 text-orange-500 bg-persian-orange/20 rounded-sm p-2 text-sm">
        <p className="">Something bad happened. It prolly died 💀</p>
        <p>It will be back soon. Check again sometime later.</p>
      </div>
    </div>
  )
}

export default OhBalls
