import style from "./Gallery.module.css";
import { GalleryPicture } from "../../components/GalleryPicture/GalleryPicture";
// import { useEffect, useState } from "react";
// import { db } from "../../config/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

export function Gallery() {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const querySnapshot = await getDocs(collection(db, "images"));
  //     const imageList = querySnapshot.docs.map((doc) => doc.data().url);
  //     setImages(imageList);
  //   };

  //   fetchImages();
  // }, []);

  return (
    <>
      <section className={style.gallery_container}>
        <article className={style.event_container}>
          <h2>Peregrynacja figury Matki Boskiej Fatimskiej </h2>

          <div className={style.pictures_container}>

            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj1.webp" name="Matka Boska Fatimska"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj2.webp" name="Kazanie księdza XYZ"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj3.webp" name="Przekazanie relikwii świętego XYZ"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj4.webp" name="Biskup Ignacy Dec"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj5.webp" name="Podziękowania"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj6.webp" name="Wspólna modlitwa"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj7.webp" name="Wspólna modlitwa"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj8.webp" name="Kazanie księdza XYZ"/>
            <GalleryPicture img="/assets/zdj fatimska piskorzow/zdj9.webp" name="Biskup sprawdza wyśle kogoś na misję"/>
  
           </div>

        </article>

        <article className={style.event_container}>
          <h2>Zespół Gennesaret po raz kolejny ​9 stycznia zaprosił do wspólnego śpiewania dzieci. </h2>

          <div className={style.pictures_container}>

            <GalleryPicture img="/assets/zdj koncert genesaret/zdj1.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj2.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj3.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj4.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj5.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj6.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj7.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj8.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj9.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj10.webp" name=""/>
            <GalleryPicture img="/assets/zdj koncert genesaret/zdj11.webp" name=""/>
          
           </div>

        </article>

        <article className={style.event_container}>
          <h2>Wizytacja w parafii św. Jana Nepomucena </h2>
          <p className={style.description}>W niedzielę 22 maja bp Adam Bałabuch odwiedził parafię, w której od 4 lat proboszczem jest ks. Krzysztof Krzak. Spotkał się z wiernymi, by podsumować ostatnie pięć lat funkcjonowania parafii, a młodzieży udzielił sakramentu bierzmowania.</p>

          <div className={style.pictures_container}>

            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj1.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj2.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj3.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj4.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj5.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj6.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj7.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj8.webp" name=""/>
            <GalleryPicture img="/assets/zdj wizytacja biskupa/zdj9.webp" name=""/>
           </div>

        </article>

        <article className={style.event_container}>
          <h2>Matka Boża Dobrego Początku</h2>
          <p className={style.description}>18 sierpnia w Piskorzowie, a od 19 sierpnia w Lądku-Zdroju, przez trzy kolejne dni, gości coraz bardziej łaskami słynący obraz Matki Bożej Dobrego Początku.</p>
          <div className={style.pictures_container}>

            <GalleryPicture img="/assets/MBDP.webp" name=""/>

           </div>

        </article>
      </section>

    </>
  );
};
