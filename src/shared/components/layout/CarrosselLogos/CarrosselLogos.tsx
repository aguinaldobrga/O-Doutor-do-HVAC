import { PARCEIROS_LOGOS } from "@/data";
import styles from "./CarrosselLogos.module.css";


export function CarrosselLogos(){
  const logosDuplicados =  [...PARCEIROS_LOGOS, ...PARCEIROS_LOGOS];

  return (
    <section className={styles.carrosselConteiner}>
      <div className={styles.carrosselTrack}>
      {logosDuplicados.map((parceiro, index) => (
        <div key={`${parceiro.id}-${index}`} className={styles.carrosselItem}>
          <img 
            src={parceiro.logoUrl} 
            alt={parceiro.logoText} 
          />
        </div>
      ))}
      </div>    
    </section>
  )
}