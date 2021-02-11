import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const BlogPage = (props: any) => {
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
    <SEO title="Blog" />
    <h1>Hi from the blog page</h1>
    <p>Welcome to the blog</p>
    
    <ul>
    {posts.nodes.map((post: any) => {
        <li>{post.title}</li>
      })}
      </ul>

    {posts.nodes[0].title}

    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default BlogPage


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
/* 
export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
` */