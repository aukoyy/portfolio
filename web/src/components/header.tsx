import React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string
}

const Header = (props: HeaderProps) => {
  const { siteTitle } = props;
  return (
    <header>
      <div>
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>

  );
};

export default Header;
