import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="home sweet home">
      <p>ahh. we are home.</p>
    </Layout>
  )
}

export const Head = () => <title>home</title>

export default IndexPage