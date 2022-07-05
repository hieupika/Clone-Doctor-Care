import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';
import { BreakPoint } from '../../constants/BreakPoint';
import { maxWidth } from '../../utils';

export const ServiceStyle = {
  backgroundColor: Colors.brandGreenLight02,
  paddingTop: '26.3rem',
  paddingBottom: '16rem',

  [maxWidth(BreakPoint.MOBILE)]: {
    paddingTop: '31.8rem',
    paddingBottom: '10rem',
  },

  '.service-section-wrapper': {
    overflow: 'hidden',
  },

  '.service-section-subtitle': {
    marginBottom: '1.6rem',
    textAlign: 'center',
  },

  '.service-section-title': {
    marginBottom: '6.4rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',

    '& > div': {
      maxWidth: '49.7rem',
    },
  },

  '.service-section-list': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    marginRight: '-4rem',
  },

  '.service-section-item': {
    width: 'calc(100% / 3 - 4rem)',

    [maxWidth(BreakPoint.TABLET)]: {
      width: 'calc(50% - 4rem)',
    },

    [maxWidth(BreakPoint.MOBILE)]: {
      width: 'calc(100% - 4rem)',
    },
  },
} as CSSProp;
