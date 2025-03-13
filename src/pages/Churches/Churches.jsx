import style from "./Churches.module.css";

export function Churches() {
    return (
        <section className={style.section__churches}>
            <h1>Kościoły w naszej parafii:</h1>

            <article className={style.main__church}>
                <h2 className={style.churches__title}>Kościół podwezwaniam św. Jana Nepomucena w <strong>Piskorzowie</strong></h2>
                <img src="/assets/churches/mainChurch.jpg" alt="kościół Piskorzów" />
                <p className={style.churches__description} ><strong>św. Jan Nepomucen</strong><br/>
                    Święty Jan Nepomucen, znany również jako Jan z Pomuka, to postać historyczna i duchowa, która jest obecna w kulturze, sztuce oraz religii. Urodził się w Czechach w XV wieku i został kapłanem, a później kanonikiem w Pradze. Jego życie i działalność łączą się ze szczególną cnotą oraz poświęceniem dla wiary.
                </p>
                <p className={style.churches__description}>
                    Kościół zbudowano w XVI w., a przebudowano w 1730 i 1921. Kościół został wzniesiony przez ewangelików. W 1654 r. kościół został &quot;zredukowany&quot;. Po 75 latach został przez katolików przebudowany, a w 1921 r. rozbudowany. Do 1967 r. był kościołem filialnym parafii św. Jakuba w Pieszycach. <br/>
                    Kościół budowlą założoną na prostokącie z nieco węższym i niższym prezbiterium, do którego od północy dostawiono zakrystię. Nawę i prezbiterium nakryto ceramicznymi dachami dwuspadowymi, zakrystię przykrywa północna połać dachu prezbiterium. Ściana szczytowa zdobiona ceglanym gzymsem z fryzem arkadkowym i zwieńczona współczesną, murowaną sygnaturką trójarkadową. Wnętrze oświetlają półkoliście zamknięte okna w ceglanych opaskach. Wewnątrz wyposażenie z XVIII-XX w.
                </p>
                <p className={style.churches__adress}><strong>Adres:</strong><br/>
                    Piskorzów 42a, <br/>
                    58-250 Piskorzów
                </p>
            </article>
            <article className={style.second__church}>
                <h2 className={style.churches__title}>Kościół podwezwaniam św. Bartłomieja Apostoła w <strong>Rościszowie</strong></h2>
                <img src="/assets/churches/secondChurch.jpg" alt="kościół Rościszów" />
                <p className={style.churches__description}><strong>św. Bartłomiej</strong><br/>
                    Święty Bartłomiej jest jednym z dwunastu apostołów dwojga imion, zwany w Ewangeliach Mateusza, Marka i Łukasza Bartłomiejem a przez Jana – Natanaelem. est patronem wielu rzemieślników: rzeźników, garbarzy, introligatorów, siodlarzy, szewców, tynkarzy, górników, krawców, piekarzy, sztukatorów, a we Florencji – sprzedawców oliwy, serów i soli; wzywany w przypadku chorób nerwowych, konwulsji i chorób skóry. Ponadto jest uważany za patrona bartników, pasterzy, właścicieli winnic, grzybiarzy i rolników.
                </p>
                <p className={style.churches__description}>
                    Kościół pod wezwaniem św. Bartłomieja z około 1392 r. został przebudowany w wieku XVIII. Jest obiektem jednonawowym orientowanym z niewyodrębnionym w bryle prezbiterium. Wejście do wnętrza kościoła prowadzi przez dużą XIX-wieczną kruchtę i wieżę w osi kościoła. Wieża jest przysadzista, kwadratowa u podstawy, górna część ośmiokątna i zwieńczona stożkowym hełmem. Prezbiterium ze skarpami nakryte jest kolebkowym sklepieniem. Wyposażenie wnętrza jest dość bogate głównie barokowe, m.in. (empora przy ścianach bocznych) ołtarz główny wykonany został około 1730 roku. Z tego okresu pochodzi również ambona z malowidłami przedstawiającymi ewangelistów. Wśród rzeźb z XVIII wieku wyróżnić można św. Jana Nepomucena i błogosławionego Jana Sarkandra. Ponadto zachowało się parę obrazów malowanych na szkle, płaskorzeźby Drogi Krzyżowej oraz piaskowcowe płyty nagrobne, epitafia wmurowane w ściany zewnętrzne kościoła.
                </p>
                <p className={style.churches__adress}><strong>Adres:</strong><br/>
                    Rościszów 82, <br/>
                    58-252 Pieszyce
                </p>
            </article>
            <article className={style.third__church}>
                <h2 className={style.churches__title}>Kościół pod wezwaniam Niepokalanego Serca Najświętszej Maryi Panny w <strong>Bartoszowie</strong></h2>
                <img src="/assets/churches/thirdChurch.PNG" alt="kościół Bartoszów" />
                <p className={style.churches__description}><strong>Niepokalane Serce Najświętrzej Maryi Panny</strong><br/>
                    O Sercu Maryi jako pierwszy pisze św. Łukasz dwukrotnie w roz. 2 swojej Ewangelii, po raz pierwszy w scenie odwiedzin żłóbka narodzonego Jezusa przez pasterzy, gdy pisze:
                   <br/><em> &quot;Lecz Maryja zachowywała wszystkie te sprawy i rozważała je w swoim sercu.&quot;</em>(Łk 2, 19),<br/>
                    oraz w scenie powrotu dwunastoletniego Jezusa z Jerozolimy do Nazaretu, gdy pisze:
                    <br/>&quot;Potem poszedł z nimi i wrócił do Nazaretu; i był im poddany. A Matka Jego chowała wiernie wszystkie te wspomnienia w swym sercu.&quot; (Łk 2, 51)<br/>
                </p>
                <p className={style.churches__description}>
                    Po stworzeniu projektów prace budowlane ruszyły w marcu 2016 r. i dzięki zaangażowaniu wiernych szły bardzo sprawnie. Kiedy kościół był gotowy, ks. Krzysztof Herbut, proboszcz parafii pw. św. Jana Nepomucena w Piskorzowie, wraz z wiernymi postanowił, że skoro kościół ma nosić wezwanie Niepokalanego Serca NMP, to jego konsekrację trzeba by zaplanować na jedną z pierwszych sobót miesiąca, które są mu poświęcone. Wyznaczono ją zatem na 2 czerwca.
                </p>
                <p className={style.churches__adress}><strong>Adres:</strong><br/>
                    Bratoszów 56, <br/>
                    58-250 Pieszyce
                </p>
            </article>
            <p className={style.churches__footer}>żródło: https://pl.wikipedia.org/</p>
        </section>
    )
}
