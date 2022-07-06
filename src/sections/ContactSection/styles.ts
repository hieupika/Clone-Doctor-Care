import { CSSProp } from 'styled-components';
import { BreakPoint } from '../../constants/BreakPoint';
import { maxWidth } from '../../utils';

export const ContactStyle = {
  backgroundColor: '#FFFFFF',

  '.contact-section-wrapper': {
    paddingTop: '16rem',
    paddingBottom: '16rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6.7rem',

    [maxWidth(BreakPoint.MOBILE)]: {
      flexDirection: 'column',
      alignItems: 'start',
    }
  },

  '.contact-section-col': {
    flex: 1,
  },

  '.contact-section-img': {
    width: '100%',
    maxWidth: '57.5rem',
    height: 'auto',
    borderRadius: '1rem',
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
