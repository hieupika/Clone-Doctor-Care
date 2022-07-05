import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';
import { BreakPoint } from '../../constants/BreakPoint';
import { maxWidth } from '../../utils';

export const AboutStyle = {
  backgroundColor: Colors.brandBeige,
  paddingTop: '16rem',
  paddingBottom: '16rem',

  '.about-section-wrapper': {
    display: 'flex',
    gap: '6.7rem',

    [maxWidth(BreakPoint.MOBILE)]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },

  '.about-section-photo': {
    flex: 1,
    '> img': {
      width: '100%',
      maxWidth: '48rem',
      borderRadius: '2rem',
      objectFit: 'cover',
    },
  },

  '.about-section-intro': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
} as CSSProp;
