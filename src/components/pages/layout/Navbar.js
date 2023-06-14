import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
// import logo from "../../img/"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>IA System</h1>
      <Container>
        {/* <Link to="/">
        <img src={logo} alt='IA System'/>
        </Link> */}
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">Projetos</Link>
          </li>

          <li className={styles.item}>
            <Link to="/">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">Contato</Link>
            <li />
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
