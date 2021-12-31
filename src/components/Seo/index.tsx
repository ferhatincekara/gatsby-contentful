import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

type SeoPropTypes = {
  description?: string;
  meta?: any;
  title: string;
};

const Seo: React.FC<SeoPropTypes> = ({ description, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : ''}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  meta: [],
  description: '',
};

export default Seo;
