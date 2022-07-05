import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';

export const HeaderStyle = (isScrolling: boolean) =>
  ({
    backgroundColor: isScrolling ? Colors.brandGreen : Colors.brandGreenLight,
    position: 'sticky',
    top: 0,
    zIndex: 99,

    '.header-wrapper': {
      display: 'flex',
      alignItems: 'center',
      height: 72,
    },

    '.header-logo > img': {
      width: 133,
    },

    '.header-navtab': {
      display: 'flex',
      alignItems: 'center',
      height: 'inherit',
      margin: '0 auto',

      '&-item': {
        fontSize: '1.6rem',
        fontWeight: '400',
        color: isScrolling ? Colors.brandGreenLight02 : Colors.brandGreen,
        opacity: 0.6,
        height: 'inherit',
        padding: '0 0.4rem',
        display: 'flex',
        alignItems: 'center',

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
  } as CSSProp);
