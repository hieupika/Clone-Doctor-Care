import React from 'react';
import {} from 'styled-components/macro';
import * as Styles from './styles';

type Props = {};

const CardExpand = (props: Props) => {
  return (
    <div css={Styles.CardExpandStyle} className='container'>
      <div className='card-expand-wrapper'>
        <div className='card-expand-list'>
          <div className='card-expand-item'>
            <div className='card-expand-number'>+3.500</div>
            <div className='card-expand-text'>Pacientes atendidos</div>
          </div>
          <div className='card-expand-item'>
            <div className='card-expand-number'>+15</div>
            <div className='card-expand-text'>Especialistas disponíveis</div>
          </div>
          <div className='card-expand-item'>
            <div className='card-expand-number'>+10</div>
            <div className='card-expand-text'>Anos no mercado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExpand;
