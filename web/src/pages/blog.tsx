import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostPreview from '../components/blog-post-preview';

const BlogPage = (props: any) => {
  const { data } = props;
  const { posts } = data;

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
      <SEO title="Blog" />
      <div className="mt-8 text-gray-500">
        <h2>FILTER BY CATEGORY</h2>
        <nav className="mt-2">
          <ul className="flex">
            <li>All</li>
            <li className="ml-8">Web</li>
            <li className="ml-8">Freelancing</li>
            <li className="ml-8">Futurology</li>
          </ul>
        </nav>
        <hr className="mt-2" />
      </div>

      <div className="mt-16 flex flex-wrap justify-center lg:justify-between">
        {posts.nodes.map((node: any) => (
          <div key={node.id}>
            <BlogPostPreview node={node} />
          </div>
        ))}

      </div>

    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  fragment SanityImage on SanityMainImage {
      crop {
        _key
        _type
        top
        bottom
        left
        right
      }
      hotspot {
        _key
        _type
        x
        y
        height
        width
      }
      asset {
        _id
      }
    }

  query BlogPageQuery {
    posts: allSanityPost(
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
        categories {
          title
        }
      }
    }
  }
`;

/* site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
  title
  description
  keywords
} */
