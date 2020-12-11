import React from "react";
import { Link, graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import moment from "moment";
import { Box, Button, Chip, Typography } from "@material-ui/core";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GlobalContext } from "../components/RootContext"

const useStyles = makeStyles(() => ({
  article: {
    lineHeight: 1.6,
    fontFamily: "Merriweather, Georgia, serif",
    fontSize: "1.1rem",
    "& blockquote": {
      borderLeft: "3px solid #303032",
      marginLeft: -16,
      paddingLeft: 13,
      fontStyle: "italic"
    },
    '& h1': {
      fontFamily: 'monospace'
    },
    '& h2': {
      fontFamily: 'monospace'
    },
    '& h3': {
      fontFamily: 'monospace'
    },
    '& h4': {
      fontFamily: 'monospace'
    },
    '& h5': {
      fontFamily: 'monospace'
    },
    '& h6': {
      fontFamily: 'monospace'
    },
  },
  chip: {
    marginRight: 4
  }
}));

const Tags = ({ tags }) => {
  const classes = useStyles();

  return (
    <Box marginY={1}>
      {tags.map(tag => {
        return (
          <Chip
            color="primary"
            variant="outlined"
            classes={{ root: classes.chip }}
            label={tag}
            key={tag}
            component={Link}
            to={`/tag/${tag}`}
            onClick={() => {}}
          />
        );
      })}
    </Box>
  );
};

export default function PostTemplate({ data, pageContext }) {
  const classes = useStyles();
  const { mdx } = data;
  const {
    frontmatter: { title, tags },
    body
  } = mdx;
  const { previousPath, nextPath, postDate } = pageContext;
  const prezMode = React.useContext(GlobalContext)

  return (
    <Layout>
      <Box flexGrow={1} width="100%"  marginX="auto" style={!prezMode.prezMode ? {backgroundColor:'beige'} : {backgroundColor:'transparent'}}>
        <Box padding={ prezMode.prezMode ? 0 : 2 }>
          {!prezMode.prezMode && <Box marginBottom={1}>
            <Typography
              variant="h4"
              style={{
                fontFamily:
                  "monospace",
                fontWeight: "600",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2">
              {moment(postDate).format("LL")}
            </Typography>
            
          </Box>}
          
          <article className={classes.article}>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
          <Box display="flex">
            <Box flexGrow={1}>
              {previousPath && (
                <Button
                  component={Link}
                  to={previousPath}
                  variant="outlined"
                  color="secondary"
                >
                  <FaChevronLeft size={8} />
                  <Box marginLeft={0.5}>Previous</Box>
                </Button>
              )}
            </Box>
            { !prezMode.prezMode && <Tags tags={tags} /> }
            { nextPath && !prezMode.prezMode && (
              <Button
                component={Link}
                to={nextPath}
                variant="outlined"
                color="secondary"
              >
                <Box marginRight={0.5}>Next</Box>
                <FaChevronRight size={8} />
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($postId: String!) {
    mdx(frontmatter: { id: { eq: $postId } }) {
      body
      frontmatter {
        id
        title
        tags
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
