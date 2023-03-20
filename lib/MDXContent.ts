import path from "path"
import { readFileSync } from "fs"
import { globSync } from "glob"
import matter from "gray-matter"
import { Post } from "./types"

export default class MDXContent {
  private POST_PATH: string
  constructor(folderName: string) {
    this.POST_PATH = path.join(process.cwd(), folderName)
  }

  getSlugs() {
    const paths = globSync(`${this.POST_PATH}/*.mdx`)
    return paths.map((path) => {
      const parts = path.split("/")
      const fileName = parts[parts.length - 1]
      const [slug, _ext] = fileName.split(".")
      return slug
    })
  }

  getFrontMatter(slug: string): Post | null {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`)
    const source = readFileSync(postPath)
    const { content, data } = matter(source)

    return {
      content,
      meta: {
        slug: slug,
        excerpt: data.excerpt ?? "",
        title: data.title ?? slug,
        tags: (data.tags || []).sort(),
        date: new Date(data.date).toString() || new Date().toString(),
      },
    }
  }

  async getPostFromSlug(slug: string, force: boolean = false) {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`)
    const source = readFileSync(postPath)
    const { content, data } = matter(source)

    return {
      content,
      meta: {
        slug: slug,
        excerpt: data.excerpt ?? "",
        title: data.title ?? slug,
        tags: (data.tags || []).sort(),
        date: new Date(data.date).toString() || new Date().toString(),
      },
    }
  }

  getAllPosts(length?: number | undefined) {
    const allPosts = this.getSlugs()
      .map((slug) => {
        return this.getFrontMatter(slug)
      })
      .filter((post) => post !== null) // Filter post if it is not published
      .sort((a, b) => {
        if (new Date(a!.meta.date) > new Date(b!.meta.date)) return -1
        if (new Date(a!.meta.date) < new Date(b!.meta.date)) return 1
        return 0
      })

    return length === undefined ? allPosts : allPosts.slice(0, length)
  }

  getTableOfContents(markdown: string) {
    const regXHeader = /#{2,6}.+/g
    const headingArray = markdown.match(regXHeader)
      ? markdown.match(regXHeader)
      : []
    return headingArray?.map((heading) => {
      return {
        level: heading.split("#").length - 1 - 2, // we starts from the 2nd heading that's why we subtract 2 and 1 is extra heading text
        heading: heading.replace(/#{2,6}/, "").trim(),
      }
    })
  }
}
