import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-3xl">Hi, I am Øyvind</h1>
    <Link to="/blog/">Go to Blog</Link>
    {' '}
    <br />
    <Link to="/projects/">Go to Projects</Link>
  </Layout>
);

export default IndexPage;
