import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostPreview from '../components/blog-post-preview';

const IndexPage = (props: any) => {
  const { posts } = props.data;

  if (!posts) {
    return (
      <Layout>
        <div>
          <h1>GraphQL Error</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="mt-36">
        <h1 className="text-3xl">Hi, I am Øyvind</h1>
        <p>I like creating things with web technologies</p>

        <h2 className="text-2xl mt-36">Latest blog posts</h2>
        <div className="mt-8 flex flex-wrap justify-center lg:justify-between">
          {posts.nodes.map((node: any) => (
            <div key={node.id}>
              <BlogPostPreview node={node} />
            </div>
          ))}

        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      nodes {
        id
        publishedAt
        title
        _rawExcerpt
        slug {
          current
        }
        mainImage {
          ...SanityImage
          alt
        }
      }
    }
  }
`;
