import React from 'react'
import 'styled-components/macro';
import * as Styles from './styles';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer css={Styles.FooterStyle}>
      <div className='footer-wrapper container'>
        <div className='footer-info'>
          <img className='footer-logo' src='./icons/logo.png' alt='Logo' />
          <div className='footer-certificates'>
            <div>©2022 - DoctorCare.</div>
            <div>Todos os direitos reservados.</div>
          </div>
        </div>
        <div className='footer-socials'>
          <a href='https://www.instagram.com/'>
            <img className='icon' src='./icons/instagram.png' alt='instagram' />
          </a>
          <a href='https://www.facebook.com/'>
            <img className='icon' src='./icons/facebook.png' alt='facebook' />
          </a>
          <a href='https://www.youtube.com/'>
            <img className='icon' src='./icons/youtube.png' alt='youtube' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer