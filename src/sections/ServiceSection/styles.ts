import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';

export const ServiceStyle = {
  backgroundColor: Colors.brandGreenLight02,
  paddingTop: '26.3rem',
  paddingBottom: '16rem',

  '.service-section-subtitle' : {
    marginBottom: '1.6rem',
    textAlign: 'center',
  },

  '.service-section-title' : {
    marginBottom: '6.4rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',

    '& > div' : {
      maxWidth: '49.7rem',
    },
  },

  '.service-section-list' : {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    marginRight: '-4rem',
  },

  '.service-section-item' : {
    width: 'calc(100% / 3 - 4rem)',
  }
} as CSSProp;