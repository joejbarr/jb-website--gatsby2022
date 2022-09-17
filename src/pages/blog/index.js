import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="joe's allotment">
            <ul>
                {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                    <h2>
                      <Link to={`/blog/${node.frontmatter.slug}`}>
                      {node.frontmatter.title}
                      </Link>
                    </h2>
                    <p>posted: {node.frontmatter.date}</p>
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
          slug
        }
        id
      }
    }
  }
`


export const Head = () => <Seo title="the allotment" />
export default BlogPage