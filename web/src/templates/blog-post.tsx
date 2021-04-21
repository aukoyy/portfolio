import React from 'react';
import { graphql } from 'gatsby';
// import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post';
// import SEO from "../components/seo"
// import {toPlainText} from '../lib/helpers'
import Layout from '../components/layout';

const BlogPostTemplate = (props: any) => {
  const { data, errors } = props;
  const post = data && data.post;

  return (
    <Layout>
      <div>
        <BlogPost post={post} />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        alt
        asset {
          url
        }
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;
