import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

type ProjectPropTypes = {
  to: string;
  title: string;
  description: string;
  cover: any;
};

const Project: React.FC<ProjectPropTypes> = ({ to, description, title, cover }) => {
  return (
    <Link to={to} className="flex flex-col">
      <GatsbyImage image={cover} alt={title} />
      <div className="mt-5">
        <h4 className="text-paragraph md:text-lead text-caption">
          <span className="font-bold text-body">{title} →</span> {description}
        </h4>
      </div>
    </Link>
  );
};

export default Project;
