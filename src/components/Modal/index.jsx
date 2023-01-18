import { useRef } from "react";
import Button from "../Button";
import styles from "./Modal.module.scss";
import "../../scss/app.scss";

const Modal = ({ setIsOpen }) => {
  const rigthSideEl = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onCloseButtonClick = () => {
    console.log(rigthSideEl.current.classList);
    rigthSideEl.current.classList.add("rigthSideClose");
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={onCloseButtonClick} />
      <div className={styles.rigthSide} ref={rigthSideEl}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <div className={styles.mobile}>
              <ul className={styles.mobile__list}>
                <li className={styles.mobile__item}>
                  <a href="#technology" className={styles.mobile__link}>
                    Technology
                  </a>
                </li>
                <li className={styles.mobile__item}>
                  <a href="#advantages" className={styles.mobile__link}>
                    Advantages
                  </a>
                </li>
                <li className={styles.mobile__item}>
                  <a href="#howWork" className={styles.mobile__link}>
                    How it works
                  </a>
                </li>
                <li className={styles.mobile__item}>
                  <a href="#packages" className={styles.mobile__link}>
                    Packages
                  </a>
                </li>
                <li className={styles.mobile__item}>
                  <a href="#contacts" className={styles.mobile__link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <button className={styles.closeBtn} onClick={onCloseButtonClick}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 1.18167L24.8183 0L13 11.8183L1.18167 0L0 1.18167L11.8183 13L0 24.8183L1.18167 26L13 14.1817L24.8183 26L26 24.8183L14.1817 13L26 1.18167Z"
                  fill="black"
                />
              </svg>
            </button>
            <h2 className={styles.heading}>Contact Form</h2>
            <p className={styles.unnedHeading}>Drop Us a Line.</p>

            <form
              onSubmit={(e) => {
                onSubmit(e);
              }}
              className={styles.modalFrom}
            >
              <input
                className={styles.input}
                name="name"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="E-mail*"
                required
              />
              <textarea
                className={`${styles.input} ${styles.message}`}
                id="message"
                placeholder="Message..."
                resize="none"
              ></textarea>

              <Button
                padding="18px 40px"
                bg={true}
                type="submit"
                text="Send a Message"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
