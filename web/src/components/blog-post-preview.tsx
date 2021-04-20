import React from "react"
import {Link} from 'gatsby'
import { format } from 'date-fns'
import { getBlogUrl } from "../util/util"


interface BlogPostPreviewProps {
  node: any
}

const BlogPostPreview = (props: BlogPostPreviewProps) => {
  return (
    <Link to={getBlogUrl(props.node.publishedAt, props.node.slug.current)}>
      <div className='shadow rounded-xl mt-4 md:w-96'>
      {props.node.mainImage && props.node.mainImage.asset && props.node.mainImage.asset.url && <img width='600px' height='400px' className='rounded-t-xl' src={props.node.mainImage.asset.url} alt={props.node.mainImage.alt} />}
      <div className='p-4 mt-2'>
        <h3 className='font-bold'>{props.node.title}</h3>
        <p className='text-gray-500'>{props.node._rawExcerpt && props.node._rawExcerpt[0].children[0].text}</p>
        {<p className='mt-2'>{format((new Date(props.node.publishedAt)), 'PPP')}</p>}
      </div>
      </div>
    </Link>
  ) 
}

export default BlogPostPreview
