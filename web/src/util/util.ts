//import { format, isFuture } from "date-fns"

export function cn(...args: any[]) {
  return args.filter(Boolean).join(" ")
}

/* export function mapEdgesToNodes(data: any) {
  if (!data.edges) return []
  return data.edges.map((edge: any) => edge.node)
}

export function filterOutDocsWithoutSlugs(slug: any) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture(publishedAt: any) {
  return !isFuture(publishedAt)
} */
