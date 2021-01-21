import React from 'react'
import { Link } from 'react-router-dom'
import modules from '../../data/modules.json'
import home from '../../assets/icon/home.svg'
import Redlist from '../../components/Redlist'
import { ROUTES } from '../../configs'
import styles from './module.module.scss'

const Module = (props) => {

  const { match: { params: { id } } } = props
  const moduleIndex = Number(id)
  const data = modules[moduleIndex]

  return (
    <div className={styles.wrapper}>
      <header className={styles.headerWrapper}>
        <div className={styles.container}>
          <Link to="/">
            <img src={home} alt="home" className={styles.home}/>
          </Link>
        </div>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.container}>
          <p className={styles.tag}>MODULE {data.materiId}/{modules.length}</p>
          <h2>{data.title}</h2>
          <img src={data.image} alt={data.tag} className={styles.image}/>
          <p>{data.description}</p>
          {data.subMateri.length > 0 && <Redlist data={data.subMateri} />}
        </div>
      </main>
      <footer className={styles.footerWrapper}>
        <div className={styles.backWrapper}>
          {moduleIndex !== 0 && (
            <Link to={ROUTES.MODULE(moduleIndex-1)}>
              <p className={styles.tag}>BACK</p>
              <h3>{modules[moduleIndex-1].tag.toUpperCase()}</h3>
            </Link>
          )}
        </div>
        <div className={styles.nextWrapper}>
          {moduleIndex !== modules.length - 1 && (
            <Link to={ROUTES.MODULE(data.materiId)}>
              <p className={styles.tag}>NEXT</p>
              <h3>{modules[moduleIndex+1].tag.toUpperCase()}</h3>
            </Link>
          )}
        </div>
      </footer>
    </div>
  )
}

export default Module