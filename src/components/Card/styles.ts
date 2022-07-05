import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';

export const CardStyle = {
  width: '100%',
  backgroundColor: Colors.white,
  border: `thin solid ${Colors.brandGreenLight}`,

  '.card-wrapper' : {
    padding: '2.4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
  },

  '.card-check' : {
    width: '2.4rem',
    height: '2.4rem',
  },

  '.card-title' : {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '3.1rem',
  },

  '.card-desc' : {
    lineHeight: '150%',
    fontSize: '16px',
    fontWeight: '400',
    color: Colors.grayParagraph,
  }
} as CSSProp;