import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className="logo">
          <Link href="/">qysqa - url shortener</Link>
        </li>
        <div className={styles.links}>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#lookup">Lookup</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
