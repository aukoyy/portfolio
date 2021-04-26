/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';

import { DiagnosticCategory } from 'typescript';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostPreview from '../components/blog-post-preview';

const BlogPage = (props: any) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { data } = props;
  const { posts, categories } = data;

  if (!posts) {
    return (
      <Layout>
        <div>
          <h1>GraphQL Error</h1>
        </div>
      </Layout>
    );
  }

  const isPostInSelectedCategories = (postNode: any) => {
    let shouldRender = false;
    postNode.categories.forEach((category: any) => {
      if (selectedCategories.includes(category.title)) {
        shouldRender = true;
      }
    });
    return shouldRender;
  };

  const shouldPostRender = (postNode: any): boolean => {
    if (selectedCategories.length === 0) return true;
    return isPostInSelectedCategories(postNode);
  };

  const toggleCategory = (categoryTitle: string) => {
    if (selectedCategories.includes(categoryTitle)) {
      setSelectedCategories(selectedCategories.filter((cat: string) => cat !== categoryTitle));
    } else {
      setSelectedCategories([categoryTitle, ...selectedCategories]);
    }
  };

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="mt-8 text-gray-500">
        <h2>FILTER BY CATEGORY</h2>
        <nav className="mt-2">
          <ul className="flex">
            <li onClick={() => setSelectedCategories([])} className={`cursor-pointer ${selectedCategories.length === 0 ? 'text-gray-800' : ''}`}>
              All
            </li>
            {categories && categories.nodes.map((categoryNode: any) => (
              <li
                onClick={() => toggleCategory(categoryNode.title)}
                // eslint-disable-next-line no-underscore-dangle
                key={categoryNode._id}
                className={`cursor-pointer mx-4 px-2 ${selectedCategories.includes(categoryNode.title)
                  ? 'text-gray-800 border-blue-600 border-b-2' : ''}`}
              >
                {categoryNode.title}

              </li>
            ))}
          </ul>
        </nav>
        <hr className="mt-2" />
      </div>

      <div className="mt-16 flex flex-wrap justify-center lg:justify-between">
        {posts.nodes
          .filter((postNode: any) => shouldPostRender(postNode))
          .map((postNode: any) => (
            <div key={postNode.id}>
              <BlogPostPreview node={postNode} />
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
    categories: allSanityCategory {
      nodes {
        _id
        title
      }
    }
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
          _id
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
