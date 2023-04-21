import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import NProgress from "../components/Progress"
import { ThemeProvider } from "next-themes"

import { Space_Mono } from "next/font/google"
import { SWRConfig } from "swr"
import ErrorBoundary from "../components/ErrorBoundary"
import { useState } from "react"
import { Router } from "next/router"
import Loading from "../components/Loading"
import { Analytics } from "@vercel/analytics/react"

const space = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState<boolean>(false)
  Router.events.on("routeChangeStart", (url) => {
    setPageLoading(true)
  })

  Router.events.on("routeChangeComplete", (url) => {
    setPageLoading(false)
  })
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider attribute="class">
          <Navbar />
          <main
            className={`${space.className} max-w-5xl min-h-screen mx-auto pb-12 px-4 text-gray-600 dark:text-gray-400 antialiased pt-20`}
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
              {pageLoading ? <Loading /> : <Component {...pageProps} />}
              <Analytics />
            </SWRConfig>
            <NProgress />
          </main>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}
