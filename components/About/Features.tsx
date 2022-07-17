import Image from "next/image";
import styles from "../../styles/About.module.css";
import styled from "@emotion/styled";

const Section = styled.div`
  .features {
    color: #000;
    background-color: #fff;
    padding: 1em;
  }

  h1 {
    text-align: center;
  }

  ul > li {
    font-size: 20px;
  }

  .images {
    margin-right: 10px;
  }

  .feature {
    display: flex;
    gap: 1em;
    justify-content: center;
  }

  .text-right {
    margin: 6em 3em 0 0;
  }

  .text-left {
    margin: 6em 0 0 3em;
  }

  @media (max-width: 860px) {
    .feature {
      display: block;
    }

    .text-left {
        border-top: 4px solid #171923;
    }

    .text-left,
    .text-right,
    .images {
      margin: 0;
    }
  }
`;

const Features = () => {
  return (
    <Section>
      <div className="features">
        <div className="text">
          <h1>🚀 Features</h1>
          <div className="feature">
            <Image
              src="/images/custom-url-tokens.png"
              alt="Custom URL Token Schema"
              width={720}
              height={480}
            />
            <div className="text-right">
              <h2>✨ Custom URL tokens</h2>
              <p>
                ~ With this technology, you can write your custom words for your
                short link
              </p>
              <p>
                This is optional, so in case if you leave it blank, the app will
                generate a random token for you
              </p>
              <p>
                At the end, you can use the resulting short link for your own
                purposes.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="text-left">
              <h2>🔎 URL Lookup</h2>
              <p>
                ~ This feature prevents you from visiting dangerous websites.
              </p>
              <p>URL lookup calls database with your short link.</p>
              <p>
                Then it returns the original URL and displays it on your screen.
              </p>
              <p>[Giving a screenshot of the website is planned]</p>
            </div>
            <Image
              src="/images/url-lookup.png"
              alt="URL Lookup Schema"
              width={720}
              height={480}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
