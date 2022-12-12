import './Home.css';
import dominLogo from '../../assets/domin-logo.jpg';
import { Stack, Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';

const Home = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 425px)',
  });

  const descendFromTop = useSpring({
    from: { y: isMobile ? -200 : -100 },
    to: { y: isMobile ? -100 : 30 },
    config: config.molasses,
  });

  const ascendFromBottom = useSpring({
    from: { y: 500 },
    to: { y: isMobile ? -200 : 0 },
    config: config.molasses,
  });

  return (
    <div className='homeContainer'>
      <animated.div className='dominLogo' style={{ ...descendFromTop }}>
        <img src={dominLogo} alt='' />
        <h1>ASCEND</h1>
      </animated.div>

      <animated.div className='dominStatement' style={{ ...ascendFromBottom }}>
        <h3>Connect to all your Domin Products</h3>
        <p>
          Configure and access data from your devices remotely, in a secure
          manner
        </p>
      </animated.div>

      <animated.div className='buttons' style={{ ...ascendFromBottom }}>
        <Stack spacing={2} direction='column'>
          <Link to='/search' style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                height: '50px',
                background: '#20677c',
                fontSize: '20px',
                borderRadius: '10px',
                '&:hover': {
                  background: '#0f7c9e ',
                },
                width: '500px',
              }}
              className='buttons'
              variant='contained'
            >
              Get Started
            </Button>
          </Link>
          <Button
            sx={{
              height: '50px',
              background: '#6b6b6b',
              fontSize: '20px',
              borderRadius: '10px',
              '&:hover': {
                background: '#504e4e ',
                cursor: 'not-allowed',
              },
            }}
            variant='contained'
          >
            Log In
          </Button>
        </Stack>
      </animated.div>
    </div>
  );
};

export default Home;
