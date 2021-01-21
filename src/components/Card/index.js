import React from 'react'
import { Link } from 'react-router-dom'

import styles from './card.module.scss'

const Card = (props) => {
  const { title, subtitle, image, path } = props
  return (
    <div className={styles.wrapper}>
      <Link to={path}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
        <div className={styles.titleWrapper}>
          <div className={styles.subtitle}>
            <p>MODULE</p>
            <p>{subtitle}</p>
          </div>
          <hr className={styles.divider}/>
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Card