import React from 'react';
import { graphql } from 'gatsby';
import Img, { type FluidObject } from 'gatsby-image';
import { type GatsbyImageProps } from 'gatsby-plugin-image';

import { Brands, Layout, Project } from '@app/components';

type HomePropTypes = {
  data: {
    headCover: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    lastProject: {
      edges: {
        node: {
          id: string;
          title: string;
          description: {
            description: string;
          };
          url: string;
          cover: {
            gatsbyImageData: GatsbyImageProps;
          };
        };
      }[];
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

      <section className="container py-10 md:py-20 px-5 mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-y-10 md:gap-y-20 justify-items-center text-caption">
          <Brands.Google className="w-24 md:w-full" />
          <Brands.Facebook className="w-24 md:w-full" />
          <Brands.Amazon className="w-24 md:w-full" />
          <Brands.Stripe className="w-24 md:w-full" />
          <Brands.Uber className="w-24 md:w-full" />
          <Brands.Github className="w-24 md:w-full" />
          <Brands.Slack className="hidden md:block" />
          <Brands.Dribbble className="hidden md:block" />
          <Brands.Behance className="hidden md:block" />
          <Brands.Netlify className="hidden md:block" />
        </div>
      </section>

      <section className="container pb-10 md:pb-20 px-5 mx-auto">
        <h2 className="text-h3 md:text-h1 font-medium mb-10 md:mb-24">Featured projects ↓</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-12">
          {data.lastProject.edges.map((project) => (
            <Project
              to={project.node.url}
              title={project.node.title}
              description={project.node.description.description}
              cover={project.node.cover.gatsbyImageData}
            />
          ))}
        </div>
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

    lastProject: allContentfulProject(limit: 4) {
      edges {
        node {
          id
          title
          description {
            description
          }
          url
          cover {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default Home;
