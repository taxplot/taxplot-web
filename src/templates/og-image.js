import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const OGImage = ({ data }) => {
  const { mdx } = data;
  const {
    frontmatter: { featuredImage },
  } = mdx;

  return (
    <Img
      fluid={featuredImage.childImageSharp.fluid}
      style={{ borderRadius: 2 }}
    />
  );
};

export const pageQuery = graphql`
  query($postId: String!) {
    mdx(frontmatter: { id: { eq: $postId } }) {
      body
      frontmatter {
        id
        title
        tags
        publish
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default OGImage;
