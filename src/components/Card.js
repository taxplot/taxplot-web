import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Box, Card, CardContent, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  cardActions: {
    justifyContent: 'flex-end',
  },
  card: {
    background: 'transparent',
    textDecoration: 'none',
  },
  cardContent: {
    padding: 12,
  },
}));

export const TaxCard = ({ featuredImage, title, postDate, excerpt, url }) => {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      classes={{ root: classes.card }}
      component={Link}
      to={url}
    >
      <Img
        fluid={featuredImage.childImageSharp.fluid}
        style={{ borderRadius: 2 }}
      />
      <CardContent classes={{ root: classes.cardContent }}>
        <Typography
          gutterBottom
          variant="h6"
          style={{
            marginBottom: 0,
            fontWeight: 600,
            fontFamily:
              'monospace, Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
            lineHeight: 1.25,
          }}
        >
          {title}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {moment(postDate).format('LL')}
        </Typography>
        <Box marginY={1}>
          <Divider light />
        </Box>
        {false && ( //don't want the excerpt for now. May bring it back later
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: 'Merriweather, Georgia, serif' }}
          >
            {excerpt}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
