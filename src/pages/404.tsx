import React from 'react';

import { Layout, Seo } from '@app/components';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Seo title="Not Found" />

      <section className="container pt-4 pb-10 md:pb-20 px-5 mx-auto">
        <h3 className="text-h3 font-bold text-center">Not Found</h3>
      </section>
    </Layout>
  );
};

export default NotFound;
