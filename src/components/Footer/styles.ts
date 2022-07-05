import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';
import { BreakPoint } from '../../constants/BreakPoint';
import { maxWidth } from '../../utils';

export const FooterStyle = {
  backgroundColor: Colors.brandGreen,
  padding: '8rem 0',

  '.footer-wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [maxWidth(BreakPoint.MOBILE)]: {
      flexDirection: 'column',
      alignItems: 'start',
      gap: 34,
    }
  },

  '.footer-logo': {
    marginBottom: '2.4rem',
  },

  '.footer-certificates': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    '& > div': {
      color: Colors.white,
      fontSize: '14px',
    },
  },

  '.footer-socials': {
    display: 'flex',
    gap: '3.8rem',
  },
} as CSSProp;
