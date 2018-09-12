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
    max-width: 385px;
    margin: 0px auto;
    > h4 {
      text-align: left;
      font-size: 30px;
      margin: 1.5rem auto 1rem;
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
          </div>
        </IphoneText>
      </div>
    </HowHero>
  </Landing>
);

export default landing;
