import { MDXRemoteSerializeResult } from "next-mdx-remote"

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
}

export interface Post {
  content: string
  meta: PostMeta
}

export interface PostMeta {
  excerpt: string
  slug: string
  title: string
  tags?: string[]
  date: string
}
