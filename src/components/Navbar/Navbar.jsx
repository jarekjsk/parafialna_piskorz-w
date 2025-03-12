import styles from "./Navbar.module.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Navbar() {

    const [ isOpen, setIsOpen ] = useState(false);

    function handlerOpenMenu() {
        setIsOpen(!isOpen)
    }

    function handlerCloseMenu() {
        setIsOpen(false)
    }

    return (
        <>
            <div className={styles.navbar} >
                <span className={styles.quote}>Zaufajcie pamięci Boga. Jego pamięć nie jest &quot;twardym dyskiem&quot;, <br /> który rejestruje i zapisuje wszystkie nasze dane, <br />ale czułym współczującym sercem, które cieszy się trwale <br />usuwając wszelkie nasze ślady zła. - papież Franciszek</span>
            </div>
            <div className={styles.main__title}>
                <h1 className={styles.title}>Parafia św. Jana Nepomucena w Piskorzowie </h1>
            </div>
            <nav className={styles.menu}>
                <div className={styles.hamburger} onClick={handlerOpenMenu}>
                    <div className={`${styles.bar} ${isOpen ? styles.bar__open : ""}`}></div>
                    <div className={`${styles.bar} ${isOpen ? styles.bar__open : ""}`}></div>
                    <div className={`${styles.bar} ${isOpen ? styles.bar__open : ""}`}></div>
                </div>



            
                    <div className={`${styles.menu__list} ${isOpen ? styles.menu__open : ""}`}>
                        <Link to={"/"} onClick={handlerCloseMenu}><Button>Strona główna</Button></Link>    
                        <Link to={"/annoucements"} onClick={handlerCloseMenu}><Button>Intencje mszalne i ogłoszenia</Button></Link>
                        <Link to={"/gallery"} onClick={handlerCloseMenu}><Button>Galeria</Button></Link>
                        <Link to={"/churches"} onClick={handlerCloseMenu}><Button>Nasze kościoły</Button></Link>
                        <Link to={"/contact"} onClick={handlerCloseMenu}><Button>Kancelaria parafialna</Button></Link>
                    </div>
            
            </nav>
        </>    
    )
}