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
  console.log({ title }, { publishedAt }, { _rawBody }, { _rawExcerpt });
  return (
    <article className="md:mt-8 font-raylway">
      <div className="flex">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl mt-12 mr-4 border-b-4 border-blue-500">{title}</h1>

            {publishedAt && (
              <div className="mt-2 text-gray-300">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM do, yyyy')}
              </div>
            )}
          </div>
          <div className="w-1/2 lg:w-2/3 object-cover">
            {mainImage && mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .url()!}
                alt={mainImage.alt}
              />
            )}
          </div>
        </div>

      </div>

      <div className="mt-8 text-xl text-gray-800">
        {_rawBody && (<PortableText blocks={_rawBody} />)}
      </div>
    </article>
  );
}

export default BlogPost;
