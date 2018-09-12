import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  background-color: #fafafa;
  color: #fff;
`;
const SiteLogo = styled.div`
  padding: 0 10px 0 10px;
  > a {
    text-decoration: none;
    background-color: transparent;
    color: #222;
    > svg {
      color: #222;
      text-align: center;
      margin: 0 auto 0 auto;
    }
  }
`;
const Logo = styled.div`
  width: 130px;
  height: 50px;
  margin: 0 auto 0 auto;
`;
const RightGutter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  z-index: 1039;
  margin-right: 5px;
  > div {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    text-align: right;
    height: 40px;
  }
`;
const Links = styled.ul`
  display: inline-block;
  justify-content: space-around;
  > * {
    padding-left: 0.8rem;
    margin-right: 5px;
    padding: 0 1rem;
    height: 40px;
    font-size: 14px;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
    color: #595758;
    background-color: transparent;
    border: 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
    z-index: 2;
    font-weight: 400;
    > span {
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
      font-size: 16px;
      outline: 0 !important;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      padding: 8px;
    }
  }
`;
const header = () => (
  <header>
    <nav>
      <NavBar>
        <SiteLogo>
          <a href="/">
            <Logo>
              <svg
                width="130px"
                height="50px"
                viewBox="0 0 137 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m37.1 24.4v-20.8c0-0.3 0.2-0.6 0.6-0.6h1.9c0.3 0 0.6 0.2 0.6 0.6v20.9c0 0.3-0.2 0.6-0.601 0.6h-1.899c-0.3-0.1-0.6-0.3-0.6-0.7z"
                  fill="#3D3B3C"
                />
                <path
                  d="m44.3 5.5v-2c0-0.3 0.2-0.6 0.6-0.6h2.1c0.3 0 0.6 0.2 0.6 0.6v2c0 0.3-0.2 0.6-0.6 0.6h-2.1c-0.4 0-0.6-0.2-0.6-0.6zm0.1 18.9v-14.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.2 0.6 0.6v14.9c0 0.3-0.199 0.6-0.6 0.6h-1.8c-0.3-0.1-0.6-0.3-0.6-0.7z"
                  fill="#3D3B3C"
                />
                <path
                  d="m51.5 24.4v-14.8c0-0.3 0.2-0.6 0.6-0.6h1.8c0.3 0 0.6 0.2 0.6 0.6v1h0.1c0.6-0.8 1.6-1.5 3.1-1.9h0.1c2.3-0.3 4.1 0.2 5.3 1.5 1 1.1 1.601 2.5 1.601 4.399v9.899c0 0.3-0.2 0.601-0.601 0.601h-1.8c-0.3 0-0.6-0.199-0.6-0.601v-9.101c0-2.699-1.101-4.101-3.4-4.101-1.1 0-2.1 0.3-2.8 1s-1 1.601-1 2.7v9.5c0 0.3-0.2 0.6-0.601 0.6h-1.8c-0.399-0.096-0.599-0.296-0.599-0.696z"
                  fill="#3D3B3C"
                />
                <path
                  d="m68.2 24.4v-20.8c0-0.3 0.2-0.6 0.6-0.6h1.8c0.3 0 0.6 0.2 0.6 0.6v12.6h0.1l6.3-6.9c0-0.2 0.2-0.3 0.3-0.3h2.3c0.5 0 0.7 0.6 0.399 0.9l-4.599 5.2c-0.2 0.2-0.2 0.5 0 0.7l5.6 8.4c0.2 0.399 0 0.899-0.5 0.899h-2c-0.199 0-0.398-0.101-0.5-0.199l-5.1-7.6h-0.1l-2.1 2.3c-0.1 0.102-0.1 0.2-0.1 0.4v4.6c0 0.3-0.2 0.6-0.6 0.6h-1.8c-0.3-0.2-0.6-0.4-0.6-0.8z"
                  fill="#3D3B3C"
                />
                <path
                  d="M85.3,20v-8.4h-1.8c-0.3,0-0.602-0.2-0.602-0.6V9.6C83,9.3,83.2,9,83.5,9h1.9V5.7   c0-0.3,0.199-0.6,0.601-0.6h1.7c0.3,0,0.6,0.2,0.6,0.6V9h3.4c0.3,0,0.6,0.2,0.6,0.6V11c0,0.3-0.199,0.6-0.6,0.6h-3.4v8.1   c0,0.899,0.1,1.5,0.4,1.899C89,22,89.5,22.2,90.3,22.2H91c0.3,0,0.6,0.2,0.6,0.6v1.7c0,0.3-0.199,0.6-0.6,0.6h-0.9   c-1.699,0-2.898-0.398-3.699-1.199C85.7,22.9,85.3,21.7,85.3,20z"
                  fill="#3D3B3C"
                />
                <path
                  d="M95.5,24.4V9.6C95.5,9.3,95.7,9,96,9h1.7c0.3,0,0.6,0.2,0.6,0.6v1.2H98.4c0.301-0.6,0.801-1.1,1.399-1.5   c0.601-0.4,1.2-0.5,1.9-0.5c0.3,0,0.698,0,1,0.1C103,9,103.1,9.3,103.1,9.5l-0.3,1.8c-0.1,0.3-0.399,0.5-0.7,0.4   c-0.199,0-0.398-0.1-0.699-0.1c-1.899,0-2.899,1.3-2.899,3.9v8.8c0,0.3-0.2,0.601-0.601,0.601H96C95.7,25,95.5,24.8,95.5,24.4z"
                  fill="#3D3B3C"
                />
                <path
                  d="m116.6 19.8 1.301 1c0.199 0.2 0.301 0.5 0.101 0.7-0.601 0.9-1.399 1.7-2.3 2.4-1.102 0.699-2.5 1.1-4 1.1-2.2 0-4-0.8-5.4-2.3s-2.1-3.601-2.1-6.101c0-2.601 0.699-4.601 2.1-6.101s3.1-2.3 5.301-2.3c2.101 0 3.899 0.8 5.199 2.3 1.301 1.5 2 3.601 2 6.2v0.302c0 0.3-0.199 0.6-0.6 0.6h-10.4c-0.3 0-0.6 0.301-0.6 0.602 0.1 1.1 0.5 2.1 1.1 2.898 0.801 0.9 1.801 1.4 3.2 1.4 0.7 0 1.3-0.1 1.8-0.3s1-0.5 1.301-0.8c0.399-0.4 0.601-0.7 0.799-0.9 0.102-0.1 0.201-0.3 0.302-0.4 0.196-0.4 0.596-0.5 0.896-0.3zm-9.4-4.7h8.6c-0.1-1.199-0.399-2.3-1.1-3.1-0.7-0.9-1.802-1.3-3.2-1.3-1.3 0-2.4 0.5-3.102 1.4-0.798 0.9-1.198 1.9-1.198 3z"
                  fill="#3D3B3C"
                />
                <path
                  d="m134 19.8 1.3 1c0.2 0.2 0.3 0.5 0.101 0.7-0.601 0.9-1.399 1.7-2.301 2.4-1.1 0.699-2.5 1.1-4 1.1-2.199 0-4-0.8-5.398-2.3-1.4-1.5-2.102-3.601-2.102-6.101 0-2.601 0.7-4.601 2.102-6.101 1.398-1.5 3.1-2.3 5.3-2.3 2.101 0 3.899 0.8 5.2 2.3 1.3 1.5 2 3.601 2 6.2v0.302c0 0.3-0.2 0.6-0.602 0.6h-10.4c-0.302 0-0.601 0.301-0.601 0.602 0.101 1.1 0.5 2.1 1.101 2.898 0.8 0.9 1.8 1.4 3.198 1.4 0.701 0 1.302-0.1 1.802-0.3s1-0.5 1.3-0.8c0.398-0.4 0.6-0.7 0.8-0.9 0.101-0.1 0.2-0.3 0.3-0.4 0.2-0.4 0.6-0.5 0.9-0.3zm-9.4-4.7h8.602c-0.102-1.199-0.4-2.3-1.102-3.1-0.699-0.9-1.8-1.3-3.199-1.3-1.301 0-2.399 0.5-3.101 1.4-0.8 0.9-1.2 1.9-1.2 3z"
                  fill="#3D3B3C"
                />
                <path
                  d="m11 0.7c-0.5-0.9-1.8-0.9-2.3 0l-8.6 15.6c-0.4 0.8 0.2 1.7 1.1 1.7h5.8v5.9c0 0.6 0.5 1.1 1.1 1.1h3.4c0.6 0 1.1-0.5 1.1-1.1v-5.9h-1.6c-0.7 0-1.2-0.5-1.3-1.1 0-0.2 0-0.4 0.1-0.602l4.8-8.7-3.6-6.898z"
                  fill="#39E09B"
                />
                <path
                  d="m18.6 0.7c0.5-0.9 1.8-0.9 2.3 0l8.6 15.6c0.4 0.8-0.2 1.7-1.1 1.7h-5.7v5.9c0 0.6-0.5 1.1-1.101 1.1h-3.599c-0.6 0-1.1-0.5-1.1-1.1v-5.9h1.6c0.7 0 1.2-0.5 1.3-1.1 0-0.2 0-0.4-0.1-0.602l-4.8-8.698 3.7-6.9z"
                  fill="#28BF7B"
                />
              </svg>
            </Logo>
          </a>
        </SiteLogo>
        <RightGutter>
          <div>
            <Links>
              <Link to="/price">Price</Link>
              <Link to="/help">Help</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">
                <span>SIGN UP FREE</span>
              </Link>
            </Links>
          </div>
        </RightGutter>
      </NavBar>
    </nav>
  </header>
);
export default header;
