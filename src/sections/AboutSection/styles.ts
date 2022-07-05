import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';

export const AboutStyle = {
  backgroundColor: Colors.brandBeige,
  paddingTop: '16rem',
  paddingBottom: '16rem',

  '.about-section-wrapper': {
    display: 'flex',
    gap: '6.7rem',
  },

  '.about-section-img': {
    width: '48rem',
    height: '41.4rem',
    borderRadius: '2rem',
    objectFit: 'cover',
  },

  '.about-section-intro': {
    flex: 1,
  },
} as CSSProp;
