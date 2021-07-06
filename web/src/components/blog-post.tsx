import { format, formatDistance, differenceInDays } from 'date-fns';
import React from 'react';
import { buildImageObj } from '../util/util';
import imageUrlFor from '../util/image-url';
import PortableText from './portableText';

function BlogPost(props: any) {
  const { post } = props;
  const {
    _rawBody, title, mainImage, publishedAt, _rawExcerpt,
  } = post;
  return (
    <article className="md:mt-8">

      <h1 className="text-4xl mt-12 border-b-4 border-blue-500">{title}</h1>

      {publishedAt && (
        <div className="mt-2 text-gray-300">
          {differenceInDays(new Date(publishedAt), new Date()) > 3
            ? formatDistance(new Date(publishedAt), new Date())
            : format(new Date(publishedAt), 'MMMM do, yyyy')}
        </div>
      )}

      <div className="flex justify-center mt-16">
        {mainImage && mainImage.asset && (
          <img
            className="rounded-xl shadow max-h-96"
            src={imageUrlFor(buildImageObj(mainImage))
              .url()!}
            alt={mainImage.alt}
          />
        )}
      </div>

      <div className="prose mt-16 text-xl text-gray-800">
        {_rawBody && (<PortableText blocks={_rawBody} />)}
      </div>

    </article>
  );
}

export default BlogPost;
