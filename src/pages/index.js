import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { largeImgWidth } from '../components/layout.module.css'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="home sweet home">
      <p>ahh. we are home.</p>
      <StaticImage className={largeImgWidth}
        alt='green rolling hills, blue sky with some clouds in background. windows xp wallpaper "bliss"'
        src='../images/xp_bliss.jpg'
        />
     </Layout>
  )
}

export const Head = () => <Seo title="home" />

export default IndexPage