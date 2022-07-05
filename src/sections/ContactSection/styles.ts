import { CSSProp } from 'styled-components';

export const ContactStyle = {
  backgroundColor: '#FFFFFF',

  '.contact-section-wrapper': {
    padding: '16rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '6.7rem',
  },

  '.contact-section-col': {
    width: '50%',
  },

  '.contact-section-img': {
    width: '100%',
    maxWidth: '57.5rem',
    height: '37.9rem',
    borderRadius: '2rem',
  },
} as CSSProp;

export const ContactList = {
  marginTop: '4rem',
  marginBottom: '4rem',

  '.contact-list-item': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',

    '&:first-child': {
      marginBottom: '1.6rem',
    },
  },
} as CSSProp;
