import style from "./Annoucements.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { News } from "../../components/News/News";

export function Annoucements() {

    return (
        <>
        <section className={style.holy_masses__container}>
            <article className={style.holy_masses}>
                <h1 className={style.title}>
                    Msze Św.

                </h1>
                <ul>
                    <li>
                        <strong>Msze Św. w niedziele:</strong> <br/>
                        godz. 8:00, godz. 11:30 (Piskorzów); godz. 9:30 (Rościszów);
                    </li>
                    <li>
                        <strong>Msze Św. w dni robocze:</strong> <br/>
                        godz. 17:00 (Piskorzów);
                    </li>
                    <li>
                        <strong>Msze Św. w święta zniesione:</strong> <br/>
                        godz. 17:00 (Piskorzów)
                    </li>
                </ul>
                <p>Spowiedź święta 30 min przed każdą mszą świętą</p>
                <p>Ze wszelkimi sprawami zapraszam do zakrystii po mszy świętej lub do kancelarii w godzinach jej funkcjonowania</p>
                <Link to={"/contact"}><Button>Kancelaria parafialna</Button></Link>
                
            </article>
            
        </section>
        <section className={style.annoucements__container}>
            <article>
                <News/>
            </article>

        </section>
        
        </>
    )
}