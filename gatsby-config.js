module.exports = {
  siteMetadata: {
    title: `joe barr`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `allotment`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
