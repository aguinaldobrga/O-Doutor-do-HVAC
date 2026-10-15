import { Icon } from "@/shared/Icon";
import { CarrosselNoticia } from "../CarrocelNoticia";
import { Navigation } from '../Navigation';
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <CarrosselNoticia />
      <div className={styles.interface}>
        <div className={styles.logos}>
          <div className={styles.logosImg}>
            <Icon name="RegSnowflake"/>
          </div>
          <div className={styles.logosTitles}>
            <h1 className={styles.title}>
              DOUTOR <span>DO</span><br />
              HVAC
            </h1>
            <p>Seu especialista em sistemas HVAC</p>
          </div>        
        </div>      
        <Navigation/>
      </div>
    </header>
  )
}