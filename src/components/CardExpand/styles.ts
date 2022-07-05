import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';
import { BreakPoint } from '../../constants/BreakPoint';
import { maxWidth, minWidth } from '../../utils';

export const CardExpandStyle = {
  '.card-expand': {
    position: 'relative',
  },

  '.card-expand-wrapper': {
    backgroundColor: Colors.brandBeige,
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: 0,
    left: 0,
    width: '100%',
    padding: '6rem 0',
    border: `thin solid ${Colors.brandGreenLight}`,

    [maxWidth(BreakPoint.MOBILE)]: {
      padding: '4rem 0',
    },
  },

  '.card-expand-list': {
    display: 'flex',
    width: 'inherit',

    [maxWidth(BreakPoint.MOBILE)]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6rem',
    },
  },

  '.card-expand-item': {
    width: 'calc(100% / 3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [maxWidth(BreakPoint.MOBILE)]: {
      width: '100%',
    },

    [minWidth(BreakPoint.MOBILE)]: {
      '&:not(:last-child)': {
        borderRight: `thin solid ${Colors.brandGreen}`,
      },
    },
  },

  '.card-expand-number': {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '130%',
    marginBottom: '0.4rem',
  },

  '.card-expand-text': {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    color: Colors.brandGreen,
    textAlign: 'center',
  },
} as CSSProp;
