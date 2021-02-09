import React from 'react';
import { Link } from 'gatsby';

interface NavItemProps {
  text: string
  url: string
}

const NavItem = (props: NavItemProps) => {
  const { text: navItem, url } = props;
  return (

    <Link to={url} className="mt-4 text-sm">
      <li>{navItem}</li>
    </Link>
  );
};

export default NavItem;
