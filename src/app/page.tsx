import styles from "./page.module.css";
import Feature from "@/components/feature/Feature";
import Categories from "@/components/Categories/Categories";
import CardList from "@/components/CardlList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return(
    <div className={styles.container}>
      <Feature/>
      <Categories/>
     <div className={styles.content}>
      <CardList/>
      <Menu/>
     </div>
    </div>
  )
}
