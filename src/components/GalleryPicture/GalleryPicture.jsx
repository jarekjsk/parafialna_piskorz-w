import { useState } from "react";
import ReactDOM from "react-dom";
import style from "./GalleryPicture.module.css";
import { Button } from "../Button/Button";

export function GalleryPicture({ img, name }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={style.gallery_img_container}>
        <img
          className={style.gallery_img}
          src={img}
          alt={name}
          onClick={openModal}
        />
        <h3>{name}</h3>
      </div>

      {isOpen &&
        ReactDOM.createPortal(
          <div className={style.modal_overlay} onClick={closeModal}>
            <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
              <Button className={style.close_button} onClick={closeModal}>&times;</Button>
              <img className={style.modal_img} src={img} alt={name} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
