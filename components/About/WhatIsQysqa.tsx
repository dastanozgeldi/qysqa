import Image from "next/image";
import styled from "@emotion/styled";

const Section = styled.div`
  .what-is-qysqa {
    display: flex;
    gap: 2rem;
    color: #edf2f7;
    background-color: #171923;
    padding: 1em;
  }

  .highlight {
    color: #f09d03;
  }

  .text {
    margin: 3rem 0 0 3rem;
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 860px) {
    .what-is-qysqa {
        display: block;
    }
    .text {
        margin: 0;
        text-align: center;
    }
  }
`;

const WhatIsQysqa = () => {
  return (
    <Section>
      <div className="what-is-qysqa">
        <div className="text">
          <h1>🤔 What Is Qysqa?</h1>
          <p>~ Qysqa is an open-source URL shortener project.</p>
          <p>Qysqa makes it easy for you to shorten your long-long links</p>
          <p>
            It was created using{" "}
            <span className="highlight">Next.js</span>{". "}
          </p>
          <p>Paste Link → Shorten → Use</p>
        </div>
        <Image
          src="/images/what-is-qysqa.png"
          width={720}
          height={480}
          alt="Qysqa Interface"
        />
      </div>
    </Section>
  );
};

export default WhatIsQysqa;
