import 'styled-components/macro';
import WhatsAppButton from '../../components/WhatsAppButton';
import * as Styles from './styles';

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <section css={Styles.ContactStyle}>
      <div className='contact-section-wrapper container'>
        <div className='contact-section-col'>
          <div className='title'>Entre em contato com a gente!</div>
          <div css={Styles.ContactList}>
            <div className='contact-list-item'>
              <img className='icon' src='./icons/map-pin.png' alt='map-pin' />
              <span className='desc'>R. Amauri Souza, 346</span>
            </div>
            <div className='contact-list-item'>
              <img className='icon' src='./icons/mail.png' alt='mail' />
              <span className='desc'>contato@doctorcare.com</span>
            </div>
          </div>
          <WhatsAppButton />
        </div>
        <div className='contact-section-col'>
          <img className='contact-section-img' src='./images/man.png' alt='man' />
        </div>
      </div>
    </section>
  )
}

export default ContactSection