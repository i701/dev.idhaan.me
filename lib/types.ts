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
  dv?: false | boolean
}

export interface TItems {
  items: Item[]
}

export interface Item {
  track: Track
  played_at: Date
  context: null
}

export interface Track {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface Album {
  album_group: string
  album_type: string
  artists: Artist[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  is_playable: boolean
  name: string
  release_date: Date
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: Type
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export enum Type {
  Artist = "artist",
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface ExternalIDS {
  isrc: string
}

export interface IDua {
  dua: string
  pronounciation?: string
  meaning: string
}

export interface IMediaBox {
  mediaSrc: string
  caption: string
  type: "IMAGE" | "VIDEO"
}
