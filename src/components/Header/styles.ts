import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';
import { BreakPoint } from '../../constants/BreakPoint';
import { maxWidth, minWidth } from '../../utils';

const HEADER_HEIGHT = '72px';

export const HeaderStyle = (isScrolling: boolean) =>
  ({
    backgroundColor: isScrolling ? Colors.brandGreen : Colors.brandGreenLight,
    position: 'sticky',
    top: 0,
    zIndex: 98,

    '.header-wrapper': {
      display: 'flex',
      alignItems: 'center',
      height: HEADER_HEIGHT,

      [maxWidth(BreakPoint.MOBILE)]: {
        justifyContent: 'space-between',
      },
    },

    '.header-logo > img': {
      width: 133,
    },

    '.header-navtab': {
      display: 'flex',
      alignItems: 'center',
      height: 'inherit',
      margin: '0 auto',

      [maxWidth(BreakPoint.MOBILE)]: {
        display: 'none',
      },

      '&-item': {
        fontSize: '1.6rem',
        fontWeight: '400',
        color: isScrolling ? Colors.brandGreenLight02 : Colors.brandGreen,
        opacity: 0.6,
        height: 'inherit',
        padding: '0 0.4rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '0.2rem solid transparent',

        '&:not(:last-child)': {
          marginRight: '2.6rem',
        },

        '&.active': {
          opacity: 1,
          borderBottom: `0.2rem solid ${
            isScrolling ? Colors.brandGreenLight02 : Colors.brandGreen
          }`,
        },
      },
    },

    '.header-booking-button': {
      [maxWidth(BreakPoint.MOBILE)]: {
        display: 'none',
      },

      padding: '1rem 2.4rem',
      backgroundColor: 'transparent',
      width: 'fit-content',
      border: `thin solid ${isScrolling ? Colors.white : Colors.brandGreen}`,
      borderRadius: '4rem',
      cursor: 'pointer',

      fontSize: 14,
      fontWeight: 700,
      color: isScrolling ? Colors.white : Colors.brandGreen,
      textTransform: 'uppercase',

      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center',

      ':hover': {
        backgroundColor: Colors.brandGreen,
        color: Colors.white,
      },
    },

    '.header-menu-button': {
      width: 40,
      height: 40,
      cursor: 'pointer',

      [minWidth(BreakPoint.MOBILE)]: {
        display: 'none',
      },
    },
  } as CSSProp);

export const MobileMenu = {
  backgroundColor: Colors.brandGreen,
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT})`,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',

  [minWidth(BreakPoint.MOBILE)]: {
    display: 'none',
  },

  '.menu-list': {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    gap: 48,

    '> *': {
      cursor: 'pointer',
      color: Colors.white,
      fontSize: 24,
      fontWeight: 700,
    }
  },

  '.menu-booking-button' : {
    marginTop: 48,
    backgroundColor: Colors.white,
    color: Colors.brandGreen,
    fontSize: 18,
    fontWeight: 700,
    padding: '16px 32px',
    borderRadius: 40,
    textTransform: 'uppercase',

    marginBottom: 82,
  },

  '.menu-socicals': {
    display: 'flex',
    gap: 40,
    justifyContent: 'space-between',
  }
} as CSSProp;