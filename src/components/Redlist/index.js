import React from 'react'
import styles from './redlist.module.scss'

const Redlist = (props) => {
  const { data } = props
  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => (
        <div className={styles.itemWrapper} key={index}>
          <div>
            <div className={styles.numberList}>
              {index + 1}
            </div>
          </div>
          <div>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Redlist