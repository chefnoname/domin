import './HydraulicsList.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/domin-favicon.jpeg';
import Devices from '../Devices/Devices';
import { useSpring, animated, config } from 'react-spring';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DeviceDataCtx } from '../../Context/DeviceDataCtx';

const HydraulicsList = () => {
  const { deviceDataCtx } = useContext(DeviceDataCtx);

  const isMobile = useMediaQuery({
    query: '(max-width: 425px)',
  });

  const ascendFromBottom = useSpring({
    from: { y: 500 },
    to: { y: isMobile ? -30 : 0 },
    config: config.molasses,
  });

  return (
    <>
      <Link to='/' style={{ textDecoration: 'none', color: '#6b6b6b' }}>
        <div className='dominSearchLogo'>
          <img src={logo} alt='' />
          <h1>ASCEND</h1>
        </div>
      </Link>
      <div className='hydraulicsContainer'>
        <div className='searchContainer'>
          <div className='searchBar'>
            <SearchIcon
              sx={{ fontSize: 40, mt: '5px', ml: '10px', mr: 2 }}
              className='searchMobile'
            />
            <input type='text' placeholder='Search' autoFocus />
          </div>
          <div className='dropdown'>
            <div className='dropdownItem '>
              <p>Product type</p>
              <ArrowDropDownIcon
                sx={{ fontSize: '60px', ml: 2 }}
                className='arrowMobile'
              />
            </div>
            <div className='dropdownItem product'>
              <p>Location</p>
              <ArrowDropDownIcon
                sx={{ fontSize: '60px', ml: 2 }}
                className='arrowMobile'
              />
            </div>
          </div>
        </div>
        <div className='mapContainer'>
          {deviceDataCtx.map((device, i) => (
            <animated.div
              className={`devices  ${
                device.status === 'Error' ? 'error' : null
              }`}
              key={device.serial}
              style={{ ...ascendFromBottom }}
            >
              <Link
                to={i === 0 ? '/valve' : null}
                style={{ textDecoration: 'none' }}
              >
                <Devices
                  image={device.image}
                  serial={device.serial}
                  type={device.type}
                  location={device.location}
                  status={device.status}
                />
              </Link>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HydraulicsList;
