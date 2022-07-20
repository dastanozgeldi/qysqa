import Link from "next/link";
import styled from "@emotion/styled";

const Section = styled.nav`
  .navbar {
    font-size: 18px;
    border-bottom: 1px solid #eaeaea;
  }

  .navbar > ul {
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
  }

  .links {
    display: flex;
    gap: 1rem;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <nav className="navbar">
        <ul>
          <li className="logo">
            <Link href="/">qysqa - url shortener</Link>
          </li>
          <div className="links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="#lookup">Lookup</Link>
            </li>
          </div>
        </ul>
      </nav>
    </Section>
  );
};

export default Navbar;
