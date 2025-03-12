import styles from "./Contact.module.css";
import { Adress } from "../../components/Adress/Adress";

export function Contact() {

    return (
        <section className={styles.section__contact}>
            
            <h1>Kancelaria parafialna jest otwarta w godzinach:</h1>
            <ul>
                <li>wtorek od 19:00-20:00</li>
                <li>czwartek od 18.00-20.00</li>

            </ul>

            <p><strong>W sprawach nie cierpiących zwłoki zapraszam do bezpośredniego kontaktu telefonicznego lub na plebanię</strong></p>

            <Adress />
            <img className={styles.section__foto} src="\src\assets\38-krzak-krzysztof-7856.jpg" alt="Zdjęcie portretowe" />
            

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57131.30172923696!2d16.53690759865174!3d50.74088737473453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e49728df1183d%3A0xddf97dfa31b6cba6!2zS2_Fm2Npw7PFgiBwdyDFm3cgSmFuYSBOZXBvbXVjZW5h!5e0!3m2!1spl!2sde!4v1740348597086!5m2!1spl!2sde" 
                style={{ width: "100%", height: "450px", border: 0 }}
                allowfullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </section>
        
    )
}