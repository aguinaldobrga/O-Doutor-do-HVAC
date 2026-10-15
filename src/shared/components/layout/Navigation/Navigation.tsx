import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useActiveSection } from "@/shared/hooks/useActiveSection";

export interface NavigationProps {
    label: string
    to: string
    onLinkClick?: () => void
}

const NAV_LINKS = [
  { id: "home", label: "Home", to: "#hero" },
  { id: "about", label: "A Empresa", to: "#about" },
  { id: "services", label: "Tipos de Dutos", to: "#services" },
  { id: "portfolio", label: "Portfólio de Obras", to: "#portfolio" },
  { id: "depoimento", label: "A Voz da Equipe", to: "#depoimento" },
  { id: "localizacao", label: "Localização & Mapa", to: "#localizacao" },

];

const sectionIds = NAV_LINKS.map((item) => item.id)

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', `#${id}`)
    }
}

export function Navigation({ onLinkClick }: { onLinkClick?: () => void }) {
    const activeSection = useActiveSection(sectionIds, 0.4)

    return (
        <nav className={styles.navigate}>
            <ul className={styles.list}>
                {NAV_LINKS.map((item) => {
                    const isCurrentActive = activeSection === item.id

                    return (
                        <li key={item.to} className={styles.item}>
                            <NavLink
                                to={item.to}
                                onClick={(e) => {
                                    handleScroll(e, item.id)
                                    onLinkClick?.()
                                }}
                                className={({ isActive }) =>
                                    `${styles.link} ${isActive || isCurrentActive ? styles.activeLink : ''}`.trim()
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}