import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { getBlogUrl, buildImageObj } from '../util/util';
import imageUrlFor from '../util/image-url';

interface BlogPostPreviewProps {
  node: any
}

const BlogPostPreview = (props: BlogPostPreviewProps) => {
  const { node } = props;
  const {
    publishedAt, slug, mainImage, title, _rawExcerpt,
  } = node;
  return (

    <Link to={getBlogUrl(publishedAt, slug)}>
      <div className="shadow rounded-xl mt-4 md:w-96">
        {mainImage && mainImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(600).height(300).url()!}
          alt={mainImage.alt}
          className="rounded-t-xl"
        />
        )}
        <div className="p-4 mt-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-500">{_rawExcerpt && _rawExcerpt[0].children[0].text}</p>
          <p className="mt-2">{format((new Date(publishedAt)), 'PPP')}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostPreview;
