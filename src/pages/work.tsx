import React from 'react';
import { graphql } from 'gatsby';
import { type GatsbyImageProps } from 'gatsby-plugin-image';

import { Layout, Project, Seo } from '@app/components';

type WorkPropTypes = {
  data: {
    projects: {
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

const Work: React.FC<WorkPropTypes> = ({ data }) => {
  return (
    <Layout>
      <Seo title="Work" />

      <section className="container pt-4 pb-10 md:pb-20 px-5 mx-auto">
        <h3 className="text-h3 font-bold text-center">Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-12 mt-10 md:mt-24">
          {data.projects.edges.map((project) => (
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
    projects: allContentfulProject {
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

export default Work;
