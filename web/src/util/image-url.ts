import imageUrlBuilder from '@sanity/image-url';
import clientConfig from '../../sanity-config';

const builder = imageUrlBuilder(clientConfig.sanity);

export default function imageUrlFor(source: any) {
  return builder.image(source);
}
