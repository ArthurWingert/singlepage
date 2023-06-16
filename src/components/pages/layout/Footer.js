import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import { MdOutlinePlace } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import {MdOutlineMail} from 'react-icons/md'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
      <div className={styles.place}>
        <div></div>
        <MdOutlinePlace />{" "}
        <span>Av. Dr. Maurício Cardoso, 1520 - Novo Hamburgo</span>
        <div className={styles.phone}>
        <BsTelephone /> 
        <span>51 3586-2230</span>
        </div>
      </div>
      <p className={styles.copy_right}>
        <span>IA System</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
