import style from "./MainSite.module.css";

export function MainSite() {
    return (
        <div className={style.main_site}>
             <section >
                <iframe
                    className={style.side_bar}
                    src="https://opoka.org.pl/liturgia_iframe"
                    scrolling="yes"
                    style={{ width: '310px' }}
                    height="450"
                    frameBorder="0"
                    title="Liturgia iframe"
                ></iframe>
            </section>      

            <section className={style.main_pic}>
                <img className={style.blurred_edges} src="public\assets\kosciol_main.jpg" alt="Kościół" />
            </section>
        </div>
    )

}