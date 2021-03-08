import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './articlePreview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img
      className={styles.previewImage}
      alt=""
      fluid={article.heroImage.fluid}
    />
    <div className={styles.previewTextBox}>
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
)