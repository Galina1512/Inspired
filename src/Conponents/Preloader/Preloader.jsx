import { RotatingLines } from 'react-loader-spinner';

const style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0',
};

export const Preloader = () => (
  <div style={style}>
    {/* <Puff 
      width={140}
      height={140}
      color='#8a8a8a'
    /> */}

<RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}