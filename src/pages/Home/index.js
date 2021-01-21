import React from 'react'
import logo from '../../assets/icon/icon.png'
import { Link } from 'react-router-dom'
import modules from '../../data/modules.json'
import Card from '../../components/Card'
import { ROUTES } from '../../configs'
import { Grid } from '@material-ui/core'
import styles from './home.module.scss'

const Home = () => {

  const renderModules = () => modules.map((module, index) => (
    <Grid item key={index}>
      <Card
        title={module.tag.toUpperCase()}
        subtitle={`${module.materiId}/${modules.length}`}
        image={module.image}
        path={ROUTES.MODULE(index)}
      />
    </Grid>
  ))

  return (
    <div className={styles.wrapper}>
      <header className={styles.headerWrapper}>
        <div className={styles.container}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="home"/>
          </Link>
        </div>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.container}>
          <div className={styles.titleWrapper}>
            <p className={styles.tag}>A Quiz App</p>
            <h1>THE FIFTH FAITH</h1>
            <p className={styles.description}>
              "Sesungguhnya kita semua adalah milik Allah
              dan kepada-Nya lah kita semua pasti
              akan kembali."
            </p>
            <p>Q.S Al-Baqarah: 156</p>
          </div>
        </div>
      </main>
      <div className={styles.menuWrapper}>
        <div className={styles.container}>
          <p className={styles.tag}>MODULES</p>
          <Grid container spacing={3} justify="center">
            {renderModules()}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Home