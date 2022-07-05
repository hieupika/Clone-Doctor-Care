/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import 'styled-components/macro';
import * as Styles from './styles';

type Props = {};

const Header = (props: Props) => {
  const navTabList = ['Sobre', 'Serviços', 'Depoimentos'];

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolling(window.pageYOffset > 72);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header css={Styles.HeaderStyle(isScrolling)}>
      <div className='header-wrapper container'>
        <a href='#' className='header-logo'>
          <img src={isScrolling ? './icons/logo.png' : './icons/logo2.png'} alt='Doctor Care Logo' />
        </a>
        <nav className='header-navtab'>
          <a className='header-navtab-item active' href='#'>
            Início
          </a>
          {navTabList.map((text, index) => (
            <a key={index} className='header-navtab-item' href='#'>
              {text}
            </a>
          ))}
        </nav>
        <div className='header-booking-button'>Agendar consulta</div>
      </div>
    </header>
  );
};

export default Header;
