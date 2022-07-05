import 'styled-components/macro';
import WhatsAppButton from '../../components/WhatsAppButton';
import * as Styles from './styles';

type Props = {};

const HeadFirstSection = (props: Props) => {
  return (
    <section css={Styles.HeadFristStyle}>
      <div className='head-first-wrapper container'>
        <div className='head-first-info'>
          <div className='head-first-subtitle'>BOAS-VINDAS A DOCTORCARE 👋</div>
          <div className='head-first-title'>
            Assistência médica simplificada para todos
          </div>
          <div className='head-first-desc'>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </div>
          <WhatsAppButton />
        </div>
        <div className='head-first-photo'>
          <img src='./images/woman.png' alt='woman' />
        </div>
      </div>
    </section>
  );
};

export default HeadFirstSection;
