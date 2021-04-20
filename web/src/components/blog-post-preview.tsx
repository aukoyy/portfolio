import React from "react"
import { format } from 'date-fns'


interface BlogPostPreviewProps {
  node: any
}

const BlogPostPreview = (props: BlogPostPreviewProps) => {
  return (
    <div className='shadow rounded-xl mt-4 md:w-96'>
      {props.node.mainImage && props.node.mainImage.asset && props.node.mainImage.asset.url && <img className='rounded-t-xl' src={props.node.mainImage.asset.url} alt={props.node.mainImage.alt} />}
      <div className='p-4 mt-2'>
        <h3 className='font-bold'>{props.node.title}</h3>
        <p className='text-gray-500'>{props.node._rawExcerpt && props.node._rawExcerpt[0].children[0].text}</p>
        {<p className='mt-2'>{format((new Date(props.node.publishedAt)), 'PPP')}</p>}
      </div>
    </div>
  ) 
}

export default BlogPostPreview
