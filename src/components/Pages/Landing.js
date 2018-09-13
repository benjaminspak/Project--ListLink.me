import React from 'react';
import styled from 'styled-components';
import Onebio from './assests/onebio';

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
const HowHero = styled.div`
  margin-bottom: 80px;
  display: block;
  > div {
    position: relative;
    padding: 0px;
    max-width: 1080px;
    margin: 0px auto;
  }
`;
const IphoneHolder = styled.div`
  width: 55%;
  position: absolute;
  max-width: 682px;
  padding-bottom: 59.1642%;
  background-image: none;
`;
const IphoneVideo = styled.div`
  display: block;
`;
const Video = styled.video`
  position: absolute;
  left: 28.5%;
  width: 41.8%;
  height: 91%;
  object-fit: contain;
`;
const IphoneImage = styled.div`
  background-image: url(https://d1qr63pinnvtia.cloudfront.net/images/phone_linktree_home_new_d7a071bb.png);
  background-size: contain;
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-position: center center;
  background-repeat: no-repeat;
`;
const IphoneText = styled.div`
  text-align: left;
  width: 45%;
  margin-left: 52%;
  padding-bottom: 59.1642%;
  position: relative;
  > div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-bottom: 15%;
    max-width: 385px;
    margin: 0px auto;
    > h4 {
      text-align: left;
      font-size: 30px;
      margin: 1.5rem auto 1rem;
      font-weight: 200;
    }
    > p {
      font-size: 16px;
      line-height: 1.5em;
      margin: 1.2rem 0px;
    }
    > a {
      color: rgb(255, 255, 255);
      background-color: rgb(57, 224, 155);
      text-align: center;
      position: relative;
      z-index: 2;
      backface-visibility: hidden;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-size: 16px;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(57, 224, 155);
      border-image: initial;
      border-radius: 0px;
      overflow: hidden;
      transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
      padding: 15px 35px;
      font-weight: 700;
      display: inline-block;
      line-height: 1.5
      text-decoration: none;
      outline: 0px !important;
    }
  }
`;
const ThreeCol = styled.div`
  margin: 0 0 0 0;
  > div {
    max-width: 960px;
    margin: 0 auto;
  }
`;
const InnerCol = styled.div`
  text-align: center;
  display: inline-block;
  width: 31%;
  margin-right: 3.5%;
  margin-top: 0;
  vertical-align: top;
`;
const Col1 = styled.div`
  height: 82px;
  width: 69px;
  display: block;
  margin: 0 auto;
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
    <HowHero>
      <div>
        <IphoneHolder>
          <IphoneVideo>
            <Video preload="yes" width="303" height="540" autoPlay="true" loop="loop" muted>
              <source
                src="https://d1qr63pinnvtia.cloudfront.net/images/homepage_animation.mp4"
                type="video/mp4"
              />
              <div />
            </Video>
            <IphoneImage />
          </IphoneVideo>
        </IphoneHolder>
        <IphoneText>
          <div>
            <h4>How it works</h4>
            <p>
              Linktree is a free tool for optimising your Instagram traffic, whether you’re a
              blogger, an artist or run a content platform.
            </p>
            <p>You’ll get one bio link to house all the content you’re driving followers to.</p>
            <p>Let your content live longer than the feed.</p>
            <a href="/signup">SIGN IN</a>
          </div>
        </IphoneText>
      </div>
    </HowHero>
    <ThreeCol>
      <div>
        <InnerCol>
          <Col1>
            <Onebio />
          </Col1>
          <h4>One bio link</h4>
          <p>
            Help your followers discover
            <br />
            all of your recent content
          </p>
        </InnerCol>
      </div>
    </ThreeCol>
  </Landing>
);

export default landing;
