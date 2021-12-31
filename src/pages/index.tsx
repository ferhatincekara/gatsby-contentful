import React from 'react';
import { graphql } from 'gatsby';
import Img, { type FluidObject } from 'gatsby-image';

import { Layout } from '@app/components';

type HomePropTypes = {
  data: {
    headCover: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
};

const Home: React.FC<HomePropTypes> = ({ data }) => {
  return (
    <Layout>
      <section className="flex flex-col">
        <div className="container py-10 md:py-20 px-5 mx-auto">
          <span className="block mb-10 md:mb-20 text-h4 md:text-h3">↳</span>
          <h1 className="text-h2 md:text-display font-medium">
            Why are we developers that are also business geeks?
          </h1>
        </div>
        <Img fluid={data.headCover.childImageSharp.fluid} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    headCover: file(relativePath: { eq: "head-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Home;
