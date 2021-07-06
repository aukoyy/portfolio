import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import clientConfig from '../../sanity-config';
import serializers from './serializers';

const PortableText = ({ blocks }:any) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} imageOptions={{ w: 320, h: 240, fit: 'max' }} />
);

export default PortableText;
