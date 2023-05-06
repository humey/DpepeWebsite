import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="https://app.camelot.exchange/">Buy</a>
          </li>
          <li>
            <a href="https://dexscreener.com/arbitrum/0xef6f0011e47cd09cccdee0a21be0af03a4237914">Chart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;