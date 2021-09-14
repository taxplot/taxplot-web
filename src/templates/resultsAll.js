import React from "react";
import path from "path";
import { graphql, navigate } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { Box, Grid } from "@material-ui/core";
import Pagination from "materialui-pagination-component";

const Posts = ({ posts, pathPrefix }) => {
  return (
    <Grid container spacing={3}>
      {posts.map(
        ({
          node: {
            excerpt,
            fileAbsolutePath,
            frontmatter: { id, title, featuredImage, publish }
          }
        }) => {
          const postDate = path
            .basename(fileAbsolutePath)
            .split("-")
            .splice(0, 3)
            .join("-");
          if (publish) {
          return (
            <Grid item xs={12} sm={4} key={id}>
              <Card
                featuredImage={featuredImage}
                title={title}
                url={`/${pathPrefix}/${id}`}
                postDate={postDate}
                excerpt={excerpt}
              />
            </Grid>
          );}
          return <div />
        }
      )}
    </Grid>
  );
};

export default function ResultsAllTemplate({
  data: {
    site: {
      siteMetadata: {
        templates: {
          posts: { pathPrefix }
        }
      }
    },
    allMdx: { edges: posts }
  },
  pageContext: { totalPages, currentPage }
}) {
  return (
    <Layout>
      <Box flexGrow={1} width="100%" maxWidth={960} marginX="auto">
        <Box padding={2}>
          <Posts posts={posts} pathPrefix={pathPrefix} />
          <Pagination
            selectVariant="tab"
            page={currentPage}
            totalPages={totalPages}
            onChange={page => navigate(`/${pathPrefix}/page/${page}`)}
          />
        </Box>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        templates {
          posts {
            pathPrefix
          }
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { order: DESC, fields: [fileAbsolutePath] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fileAbsolutePath
          frontmatter {
            id
            title
            publish
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
