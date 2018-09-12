import React from 'react';
import styled from 'styled-components';

const Landing = styled.div`
  display: block;
`;
const MainHero = styled.div`
  position: relative;
  display: block;
  background-image: url(https://d1qr63pinnvtia.cloudfront.net/images/hero_44b0360b.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 744px;
  min-height: 400px;
  > div {
    position: absolute;
    top: 45%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    > h2 {
      font-size: 5.1vh;
      color: #fff;
      padding: 0 20px;
      max-width: 65vh;
      margin: 0 auto;
      margin-bottom: 3.5vh;
      font-weight: 400;
    }
    > a {
      color: #fff;
      background-color: #39e09b;
      border: 2px solid #39e09b;
      border-radius: 0;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
      z-index: 2;
      backface-visibility: hidden;
      letter-spacing: 0.5px;
      padding: 15px 35px;
      outline: 0 !important;
      font-weight: 700;
      text-decoration: none;
      display: inline-block;
      line-height: 1.5;
      white-space: nowrap;
      vertical-align: middle;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
`;
const TextHero = styled.div`
  display: block;
  > div {
    padding: 0;
    margin: 0 auto;
    max-width: 1080px;
    > h3 {
      margin: 60px auto;
      font-size: 50px;
      padding: 0;
      max-width: 960px;
      text-align: center;
      font-weight: 400;
      line-height: 1.2;
      color: #222;
    }
  }
`;
const landing = () => (
  <Landing>
    <MainHero>
      <div>
        <h2>
          You only get one chance to link in Instagram.
          <br />
          Make it do more.
        </h2>
        <a href="/">SIGN IN WITH INSTAGRAM</a>
      </div>
    </MainHero>
    <TextHero>
      <div>
        <h3>Never change your bio link again.</h3>
      </div>
    </TextHero>
  </Landing>
);

export default landing;
