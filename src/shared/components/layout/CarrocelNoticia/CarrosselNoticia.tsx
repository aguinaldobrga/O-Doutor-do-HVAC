
import { ADDRESS_DATA } from "@/data";
import styles from "./CarrosselNoticia.module.css";
import { Icon } from "@/shared/Icon";


export function CarrosselNoticia(){
  return (
    <section className={styles.carrosselConteiner}>
      <div className={styles.carrosseInterface}>
      {ADDRESS_DATA.map((parceiro, index) => (
        <div key={`${parceiro.id}-${index}`} className={styles.carrosselItem}>
          <div className={styles.mapaTopo}>       
              <Icon name="Mapa" className={styles.icon}/>
              <span>
                {parceiro.fabrica}
              </span>
              <span>
                {parceiro.city}
              </span>
              -
              <span>
                {parceiro.estado}
              </span>          
          </div>
          <div className={styles.mapaTopo}>
            <span>
              <Icon name="Relogio" className={styles.icon}/>
            </span>
            <span>
              {parceiro.horario}
            </span>
          </div>

          <div className={styles.mapaTopo}>
            <span>
              <Icon name="Telefone" className={styles.iconTelefone}/> 
            </span>
            <span>
              {parceiro.fone}
            </span>
          </div>

          <div className={styles.selocontainer}>
            <span className={styles.selo}>
              <Icon name="CheckFill" className={styles.icon}/>
              Selo CREA / PMOC
            </span>
          </div>
        </div>
      ))}
      </div>    
    </section>
  )
}