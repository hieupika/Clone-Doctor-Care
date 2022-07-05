import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';

export const CardExpandStyle = {
  position: 'relative',
  width: '100%',

  '.card-expand-wrapper': {
    backgroundColor: Colors.brandBeige,
    position: 'absolute',
    top: '100%',
    transform: 'translateY(-50%)',
    width: '100%',
    padding: '6rem 0',
    border: `thin solid ${Colors.brandGreenLight}`,
  },

  '.card-expand-list': {
    display: 'flex',
  },

  '.card-expand-item' : {
    width: 'calc(100% / 3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '&:not(:last-child)': {
      borderRight: `thin solid ${Colors.brandGreen}`,
    },
  },

  '.card-expand-number' : {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '130%',
    marginBottom: '0.4rem',
  },

  '.card-expand-text' : {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    color: Colors.brandGreen,
  }
} as CSSProp;