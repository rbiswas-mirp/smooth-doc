const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-doc',
      options: {
        name: 'Gatsby DOC',
        siteUrl: 'https://smooth-doc.com',
        description: 'Ready to use documentation theme for Gatsby.',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Rahul Biswas',
        sections: ['About', 'Guide', 'Components', 'Reference'],
        navItems: [{ title: 'Docs', url: '/docs/' }],
        twitterAccount: '#',
        githubRepositoryURL: '#',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          apiKey: 'a0c23a738fe1cfffa923daba2eb185be',
          indexName: 'smooth-doc',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-154496255-5',
      },
    },
  ],
}
