import React from 'react';
import 'styled-components/macro';
import * as Styles from './styles';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section css={Styles.AboutStyle}>
      <div className='about-section-wrapper container'>
        <div className='about-section-photo'>
          <img src='./images/doctor.png' alt='doctor' />
        </div>
        <div className='about-section-intro'>
          <div className='about-section-subtitle subtitle'>SOBRE NÓS</div>
          <div className='about-section-title title'>
            Entenda quem somos e por que existimos
          </div>
          <div className='desc'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
