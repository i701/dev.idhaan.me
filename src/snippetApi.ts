import path from "path"
import fs from "fs"
import { globSync } from "glob"
import matter from "gray-matter"

const SNIPPETS_PATH = path.join(process.cwd(), "snippets")

export const getSnippetSlugs = (): string[] => {
  const paths = globSync(`${SNIPPETS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split("/")
    const fileName = parts[parts.length - 1]
    const [slug, _ext] = fileName.split(".")
    return slug
  })
}

export const getAllSnippets = () => {
  const snippets = getSnippetSlugs()
    .map((slug) => getSnippetFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
    })
    .reverse()
  return snippets
}

interface Snippet {
  content: string
  meta: SnippetMeta
}

export interface SnippetMeta {
  excerpt: string
  slug: string
  title: string
  date: string
}

export const getSnippetFromSlug = (slug: string): Snippet => {
  const snippetPath = path.join(SNIPPETS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(snippetPath)
  const { content, data } = matter(source)
  console.log({ content, data })

  return {
    content,
    meta: {
      slug: slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      date: new Date(data.date).toString() || new Date().toString(),
    },
  }
}
