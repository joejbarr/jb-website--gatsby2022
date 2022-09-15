import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="joe's allotment">
            <ul>
                {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>posted: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                    </article>
                ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`


export const Head = () => <Seo title="the allotment" />
export default BlogPage