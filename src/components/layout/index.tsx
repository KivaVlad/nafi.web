import {memo} from "react";
import {Outlet} from "react-router-dom";
import Header from "../header";
import Navbar from "../navbar";
import styles from "./style.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <Header/>
      </header>

      <div className={styles.wrapper}>
        <aside className={styles.navbar}>
          <Navbar/>
        </aside>
          
        <main className={styles.main}>
          <Outlet/>
        </main>
      </div>

    </div>
  )
}

export default memo(Layout);