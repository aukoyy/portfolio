import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from "gatsby"
import BlogPostPreview from '../components/blog-post-preview';


const IndexPage = (props: any) => {
  const { posts } = props.data

  if (!posts) {
    return (
      <Layout>
        <div>
          <h1>GraphQL Error</h1>
        </div>
      </Layout>
    )
  }

  console.log(posts.nodes)

  return (
    <Layout>
    <SEO title="Home" />
    <div className="mt-36 flex justify-center">
      <div className="w-4/6">
        <h1 className="text-3xl">Hi, I am Øyvind</h1>
        <p>I like creating things with web technologies</p>

        <h2 className="text-2xl">Latest blog posts</h2>
        <div className="mt-16 flex">
          {posts.nodes.map((node: any) => {
            return (
              <div key={node.id}>
                <BlogPostPreview node={node} />
              </div>
            )
          })}
          
        </div>


        <h3 className="text-2xl">Projects</h3>
      </div>
    </div>

  </Layout>
);
}
  

export default IndexPage;

export const query = graphql`
  {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      nodes {
        id
        publishedAt
        title
        _rawExcerpt
      }
    }
  }
`
