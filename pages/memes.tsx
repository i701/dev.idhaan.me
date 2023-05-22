import Head from "next/head"
import Image from "next/image"
import MemeBoard from "../components/MemeBoard"

const Memes = () => {
  return (
    <>
      <Head>
        <title>Cheese</title>
        <meta
          property="og:image"
          content={`https://dev.idhaan.me/api/og?title=lmao`}
        />
      </Head>
      <div className={`space-y-4`}>
        <h1 className="text-4xl font-bold">
          <span className="accent-line text-orange-600">Memes</span>
        </h1>
        <div className="tracking-10 space-y-2 md:flex-row flex-col items-start flex justify-between w-full">
          <div className="md:max-w-xl text-base md:text-lg tracking-tighter space-y-4">
            <div className="md:text-lg text-orange-500 bg-persian-orange/20 rounded-sm p-6 border-l-orange-500 border-l-2">
              <p>The ting goes skrrrah,</p>
              <p>pap, pap, ka-ka-ka,</p>
              <p>Skibiki-pap-pap, and a pu-pu-pudrrrr-boom Skya,</p>
              <p>du-du-ku-ku-dun-dun Poom, poom.</p>
              <br />
              <p className="dark:text-gray-400 text-gray-600">
                Perspiration ting, Lynx effect ✨
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto">
            <Image
              className="rounded shadow-xl md:my-0 my-4"
              src={"/sus.gif"}
              alt="meme lord dwayne"
              width={200}
              height={200}
              priority
              placeholder="blur"
              blurDataURL="/sus.gif"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-base md:text-xl font-bold">
            <span className="accent-line">memes</span>?
          </div>
          <p className="tracking-10">Yes sir.</p>
        </div>
        <MemeBoard />
      </div>
    </>
  )
}

export default Memes
