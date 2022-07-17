import styled from "@emotion/styled";

const Section = styled.main`
  .form {
    max-width: 700px;
    text-align: center;
    margin: 20vh auto;
    padding: 1rem;
  }

  .form input {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #fc913a;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }

  .form > button {
    width: 100%;
    background: #fc913a;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
  }

  .url {
    width: 100%;
  }

  .token {
    width: 100%;
    display: flex;
    padding: 0.3rem 0;
  }

  .token > h3 {
    font-size: 20px;
    margin: 12px 8px 0 0;
  }

  .token > input {
    width: 100%;
  }

  .form > button {
    width: 100%;
  }
`;

const Main = () => {
  return (
    <Section>
      <form className="form">
        <h1>&lt; URL Shortener &gt;</h1>
        <input className="url" placeholder="https://dositan-links.vercel.app" />
        <div className="token">
          <h3>https://qysqa.xyz/</h3>
          <input type="text" placeholder="Custom token [optional]" />
        </div>
        <button>Shorten</button>
      </form>
    </Section>
  );
};

export default Main;
