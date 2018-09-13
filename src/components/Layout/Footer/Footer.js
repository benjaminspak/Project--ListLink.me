import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Love from './love';
import Coffee from './coffee';
import Fork from './fork';

const Footer = styled.div`
  bottom: 0;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  height: 80px;
  > div {
    display: block;
    margin: auto;
    > a {
      display: block;
      text-align: center;
      color: #222;
      text-decoration: none;
    }
  }
`;
const FooterLink = styled.ul`
  display: block;
  justify-content: space-around;
  text-align: center;
  > * {
    padding: 0 1rem;
    height: 40px;
    font-size: 14px;
    font-weight:100;
    color: #222;
    list-style: none;
    text-decoration: none;
`;
const footer = () => (
  <footer>
    <Footer>
      <div>
        <a href="https://spak.co/">
          Built with <Love />, <Fork />, and <Coffee /> by spak.co &copy; 2018.
        </a>
      </div>
      <FooterLink>
        <Link to="/">Trust Centre</Link>
        <Link to="/">Report a Violation</Link>
        <Link to="/">Jobs</Link>
      </FooterLink>
    </Footer>
  </footer>
);
export default footer;
