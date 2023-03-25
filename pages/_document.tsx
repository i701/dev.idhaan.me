import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      {/* TODO: fix bg for dark and light mode */}
      <body id="content" className="dark:bg-transparent">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
