import React, { type ReactNode } from 'react';

import { Header, Footer } from '@app/components';

type LayoutPropTypes = {
  children: ReactNode;
};

const Layout: React.FC<LayoutPropTypes> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
