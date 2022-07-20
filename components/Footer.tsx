import styled from "@emotion/styled";

const Section = styled.footer`
  .footer {
    font-size: 18px;
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const Footer = () => {
  return (
    <Section>
      <div className="footer">
        <a href="https://github.com/jolshylar">&copy; Jolshylar 2021-2022</a>
      </div>
    </Section>
  );
};

export default Footer;
