import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { useRouter } from "next/router"
import { useEffect } from "react"

// nprogrss config
NProgress.configure({
  easing: "ease",
  speed: 800,
  showSpinner: false,
})

export default function Progress() {
  const router = useRouter()

  useEffect(() => {
    const start = () => {
      NProgress.start()
    }
    const end = () => {
      NProgress.done()
    }
    router.events.on("routeChangeStart", start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)
    return () => {
      router.events.off("routeChangeStart", start)
      router.events.off("routeChangeComplete", end)
      router.events.off("routeChangeError", end)
    }
  }, [router.events])
  return <></>
}
