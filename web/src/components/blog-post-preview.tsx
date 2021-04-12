import React from "react"
import { Link, graphql } from "gatsby"
import { format } from 'date-fns'

import Layout from "./layout"
import SEO from "./seo"

interface BlogPostPreviewProps {
  node: any
}

const BlogPostPreview = (props: BlogPostPreviewProps) => {
  return (
    <div className='shadow rounded-xl m-4 p-4 w-64'>
      <div>picture</div>
      <h3 className='font-bold'>{props.node.title}</h3>
      <p className='text-gray-500'>{props.node._rawExcerpt && props.node._rawExcerpt[0].children[0].text}</p>
      {/* <p className='mt-2'>{format((props.node.publishedAt), 'MMMM Do, yyyy')}</p> */}
    </div>
  ) 
}

export default BlogPostPreview
