import React from 'react'
import 'styled-components/macro';
import * as Styles from './styles';

type Props = {}

const WhatsAppButton = (props: Props) => {
  return (
    <div css={Styles.ButtonStyle}>
      <img className='icon' src='./icons/whatsapp.png' alt='Agende sua consulta' />
      <span>Agende sua consulta</span>
    </div>
  )
}

export default WhatsAppButton