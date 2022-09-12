import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
        <p>a real boy</p>
    </Layout>
  )
}

export const Head = () => <Seo title="about" />

export default AboutPage