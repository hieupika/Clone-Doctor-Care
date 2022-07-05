import { CSSProp } from 'styled-components';
import { Colors } from '../../constants';

export const ButtonStyle = {
  cursor: 'pointer',
  padding: '1.6rem 3.2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  backgroundColor: Colors.brandGreen,
  borderRadius: '4rem',
  width: 'fit-content',

  ':hover': {
    backgroundColor: Colors.bandGreenHover,
  },
  
  '& > span' : {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: '14px',
  }
} as CSSProp;
