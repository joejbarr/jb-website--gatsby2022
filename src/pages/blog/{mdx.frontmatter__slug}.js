import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPost = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p><em>{data.mdx.frontmatter.date}</em></p>
      {children}
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
  }
}
`

export const Head = () => <Seo title="allotment" />

export default BlogPost