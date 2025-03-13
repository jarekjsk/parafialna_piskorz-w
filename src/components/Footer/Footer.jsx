import  styles from "./Footer.module.css";
import { Adress } from "../Adress/Adress.jsx";

export function Footer() {
    
    return (
        <footer className={styles.container}>
            <section className={styles.footer__section}>
                <Adress />
                        
            <article className={styles.footer__contact }> 
                <h3>Polecane strony:</h3>
                <ul className={styles.footer__links}>
                    <li><a href="https://www.gosc.pl/" target="_blank" rel="noopener noreferrer"><img className={styles.img__footer} src="/assets/gosc.png" alt="gość niedzielny" /></a></li>
                    <li><a href="https://www.niedziela.pl/" target="_blank" rel="noopener noreferrer"><img className={styles.img__footer} src="/assets/niedziela.jpg" alt="niedziela" /></a></li>
                    <li><a href="https://www.radiomaryja.pl/" target="_blank" rel="noopener noreferrer"><img className={styles.img__footer} src="/assets/radiomaryja.png" alt="radio maryja" /></a></li>
                    <li><a href="https://karmelczerna.pl/" target="_blank" rel="noopener noreferrer"><img className={styles.img__footer} src="/assets/karmelczerna.png" alt="karmel czerna" /></a></li>

                </ul>

            </article>
            </section>
            
            <div className={styles.footer__rights}>&copy; <a href="https://github.com/jarekjsk" target="_blank" rel="noopener noreferrer">JarosławSzczepaniak</a></div>
        </footer>
    )
}
