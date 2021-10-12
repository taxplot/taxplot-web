require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `tax·plot`,
    siteUrl: `https://taxplot.com`,
    description: `Tax advice for the data-driven.`,
    components: {
      appbar: {
        position: 'sticky',
        links: [
          // {
          //   title: "about",
          //   url: "/doc1",
          // },
          // {
          //   title: 'docs',
          //   url: '/doc1',
          // },
          {
            title: 'contact',
            url: '/contact',
          },
          // {
          //   title: "login",
          //   url: "/login",
          // },
        ],
      },
      footer: {
        copyright: 'taxplot.com',
        columns: [
          {
            heading: 'Column 1',
            links: [
              {
                title: 'Link 1',
                url: '#',
              },
              {
                title: 'Link 2',
                url: '#',
              },
              {
                title: 'Link 3',
                url: '#',
              },
            ],
          },
          {
            heading: 'Column 2',
            links: [
              {
                title: 'Link A',
                url: '#',
              },
              {
                title: 'Link B',
                url: '#',
              },
              {
                title: 'Link C',
                url: '#',
              },
            ],
          },
          {
            heading: 'Column 3',
            links: [
              {
                title: 'Link x',
                url: '#',
              },
              {
                title: 'Link y',
                url: '#',
              },
              {
                title: 'Link z',
                url: '#',
              },
            ],
          },
        ],
      },
    },
    templates: {
      home: {
        totalPosts: 6,
        template: 'home',
      },
      pages: {
        path: '/content/pages/',
        template: 'page',
      },
      posts: {
        path: '/content/posts/',
        pathPrefix: 'posts',
        template: 'post',
        filters: {
          tag: {
            pathPrefixTag: 'tag',
            template: 'tag',
            totalPosts: 3,
            pagination: {
              template: 'resultsTag',
              resultsPerPage: 6,
            },
          },
        },
        pagination: {
          template: 'resultsAll',
          resultsPerPage: 6,
        },
      },
    },
  },
  plugins: [
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        loginPath: '/login',
        loginRedirectPath: '/',
        socialLogins: ['google'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tax·plot`,
        short_name: `tax·plot`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-posts`,
        path: `src/content/posts`,
      },
    },
  ],
};
