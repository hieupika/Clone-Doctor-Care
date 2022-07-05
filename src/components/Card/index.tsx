import React from 'react';
import 'styled-components/macro';
import * as Styles from './styles';

type Props = {
  title: string;
};

const Card = ({ title }: Props) => {
  return (
    <div css={Styles.CardStyle}>
      <div className='card-wrapper'>
        <img className='card-check' src='./icons/check.png' alt='check' />
        <div className='card-title'>{title}</div>
        <div className='card-desc'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim.
        </div>
      </div>
    </div>
  );
};

export default Card;
