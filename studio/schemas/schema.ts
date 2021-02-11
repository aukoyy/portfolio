// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import post from './documents/post';
import category from './documents/category';
import author from './documents/author';

// Object types
import authorReference from './objects/authorReference';
import mainImage from './objects/mainImage';
import bioPortableText from './objects/bioPortableText';
import excerptPortableText from './objects/excerptPortableText';
import bodyPortableText from './objects/bodyPortableText';
import siteSettings from './documents/siteSettings';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		siteSettings,
		post,
		category,
		author,
		authorReference,
		mainImage,
		bioPortableText,
		excerptPortableText,
		bodyPortableText,
	]),
});
