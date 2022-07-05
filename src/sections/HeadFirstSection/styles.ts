import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';

export const HeadFristStyle = {
  height: '606px',
  width: '100%',
  backgroundColor: Colors.brandGreenLight,

  '.head-first-wrapper': {
    display: 'flex',
    alignItems: 'center',
  },

  '.head-first-subtitle': {
    color: Colors.brandGreen,
    fontSize: '14px',
    fontWeight: '700',
    marginBottom: '1.6rem',
  },

  '.head-first-desc': {
    color: Colors.grayParagraph,
    fontWeight: 400,
    lineHeight: '150%',
    fontSize: '18px',
    marginBottom: '3.2rem',
  },

  '.head-first-title': {
    color: '#212529',
    fontWeight: '700',
    fontSize: '52px',
    marginBottom: '2.4rem',
    lineHeight: '130%',
  },

  '.head-first-photo > img': {
    width: '42rem',
    height: '54.7rem',
  },
} as CSSProp;
