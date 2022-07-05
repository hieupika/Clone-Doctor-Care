/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import 'styled-components/macro';
import * as Styles from './styles';

type Props = {};

const Header = (props: Props) => {
  const navTabList = ['Início', 'Sobre', 'Serviços', 'Depoimentos'];

  const [activeNavItem, setActiveNavItem] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClickMenuButton = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolling(window.pageYOffset > 72);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (activeMenu && window.innerWidth > 768) {
        setActiveMenu(false);
      }
    }

    window.addEventListener('resize', handleResize);
  }, [activeMenu]);

  return (
    <header css={Styles.HeaderStyle(isScrolling || activeMenu)}>
      <div className='header-wrapper container'>
        <a href='#' className='header-logo'>
          <img
            src={
              isScrolling || activeMenu
                ? './icons/logo.png'
                : './icons/logo2.png'
            }
            alt='Doctor Care Logo'
          />
        </a>
        <nav className='header-navtab'>
          {navTabList.map((text: string, index: number) => (
            <a
              key={index}
              className={`header-navtab-item ${
                index === activeNavItem ? 'active' : ''
              }`}
              href='#'
              onClick={() => setActiveNavItem(index)}
            >
              {text}
            </a>
          ))}
        </nav>
        <div className='header-booking-button'>Agendar consulta</div>

        {/* mobile */}
        <img
          className='header-menu-button'
          src={
            activeMenu
              ? './icons/close.png'
              : isScrolling
              ? './icons/menu-white.png'
              : './icons/menu-green.png'
          }
          alt='menu'
          onClick={handleClickMenuButton}
        />
      </div>

      {activeMenu && (
        <div css={Styles.MobileMenu}>
          <div className='menu-list'>
            {navTabList.map((text, index) => (
              <div key={`menu${index}`} className='menu-list-item'>
                {text}
              </div>
            ))}
          </div>

          <div className='menu-booking-button'>Agendar consulta</div>

          <div className='menu-socicals'>
            <a href='https://www.instagram.com/'>
              <img
                className='icon'
                src='./icons/instagram.png'
                alt='instagram'
              />
            </a>
            <a href='https://www.facebook.com/'>
              <img className='icon' src='./icons/facebook.png' alt='facebook' />
            </a>
            <a href='https://www.youtube.com/'>
              <img className='icon' src='./icons/youtube.png' alt='youtube' />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
