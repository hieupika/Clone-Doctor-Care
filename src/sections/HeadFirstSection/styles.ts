import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';
import { BreakPoint } from '../../constants/BreakPoint';
import { maxWidth } from '../../utils';

export const HeadFristStyle = {
  width: '100%',
  paddingBottom: '10rem',
  backgroundColor: Colors.brandGreenLight,

  [maxWidth(BreakPoint.MOBILE)]: {
    paddingTop: '4rem',
  },

  '.head-first-wrapper': {
    display: 'flex',
    alignItems: 'center',

    [maxWidth(BreakPoint.MOBILE)]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  '.head-first-info': {
    flex: 1,
    [maxWidth(BreakPoint.MOBILE)]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '6.5rem',
    },
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

  '.head-first-photo': {
    width: '42rem',
    height: '54.7rem',

    [maxWidth(BreakPoint.MOBILE)]: {
      width: '100%',
      maxWidth: '42rem',
    },

    '> img': {
      width: '100%',
    },
  },
} as CSSProp;
