import "@/styles/globals.css"
import type { AppProps } from "next/app"
import localFont from "next/font/local"
import Navbar from "./components/Navbar"
import NProgress from "./components/Progress"

// Font files can be colocated inside of `pages`
const wotfardFont = localFont({
  src: "../assets/wotfard-regular-webfont.woff2",
})

import { Space_Mono } from "next/font/google"
import { SWRConfig } from "swr"
const space = Space_Mono({ weight: "400", subsets: [] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main
        className={`${space.className} max-w-5xl mx-auto py-8 px-4 text-gray-600 antialiased pt-20`}
      >
        <SWRConfig
          value={{
            fetcher: async <JSON = any,>(
              input: RequestInfo,
              init?: RequestInit
            ): Promise<JSON> => {
              const res = await fetch(input, init)
              return res.json()
            },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
        <NProgress />
      </main>
    </>
  )
}
