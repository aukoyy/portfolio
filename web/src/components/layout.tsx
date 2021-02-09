import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import Nav from './nav/nav';

interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */

  return (
    <>
      <Nav />

      <main>{children}</main>
      <footer>
        footer
      </footer>
    </>
  );
};

export default Layout;
