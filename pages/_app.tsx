import "@/styles/globals.css"
import type { AppProps } from "next/app"
import localFont from "next/font/local"
import Navbar from "./components/Navbar"
import NProgress from "./components/Progress"
import { ThemeProvider } from "next-themes"

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
      <ThemeProvider attribute="class">
        <Navbar />
        <main
          className={`${space.className} max-w-5xl mx-auto py-8 px-4 text-gray-600 dark:text-gray-400 antialiased pt-20`}
        >
          <div className="fixed -z-10 inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
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
      </ThemeProvider>
    </>
  )
}
