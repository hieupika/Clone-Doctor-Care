import React from 'react'
import 'styled-components/macro';
import Card from '../../components/Card';
import * as Styles from './styles';
type Props = {}

const ServiceSection = (props: Props) => {
  const cardList = [
    'Problemas digestivos',
    'Saúde Hormonal',
    'Bem-estar mental',
    'Cuidados Pediátricos',
    'Autoimune e Inflamação',
    'Saúde do Coração',
  ];

  return (
    <section css={Styles.ServiceStyle}>
      <div className='service-section-wrapper container'>
        <div className='service-section-subtitle subtitle'>SERVIÇOS</div>
        <div className='service-section-title title'>
          <div>Como podemos ajudá-lo a se sentir melhor?</div>
        </div>
        <div className='service-section-list'>
          {cardList.map((text, index) => (
            <div key={`card${index}`} className='service-section-item'>
              <Card title={text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection