import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { largeImgWidth } from '../components/layout.module.css'

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

export const Head = () => <title>home</title>

export default IndexPage