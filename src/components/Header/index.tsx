import React from 'react';
import { Link } from 'gatsby';

import { LinkButton, Logo } from '@app/components';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="container py-4 px-5 mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-black">
            <Logo />
          </Link>
          <div className="hidden md:block">
            <h2 className="text-lead ml-6">Small ideas grow brands</h2>
          </div>
        </div>
        <nav className="flex items-center space-x-8">
          <Link to="/work" className="block text-small uppercase">
            Work
          </Link>
          <Link to="/about" className="block text-small uppercase">
            About
          </Link>
          <div className="hidden md:block">
            <LinkButton to="#" black className="uppercase">
              Start a Project
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
