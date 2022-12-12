import { useContext } from 'react';
import { DeviceDataCtx } from '../../Context/DeviceDataCtx';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Devices from '../Devices/Devices';

import './Valve.css';
import Charts from './Charts';

const Valve = () => {
  const { deviceDataCtx } = useContext(DeviceDataCtx);

  const [mainValve] = deviceDataCtx;

  const isMobile = useMediaQuery({
    query: '(max-width: 425px)',
  });

  const ascendFromBottom = useSpring({
    from: { y: 500 },
    to: { y: 0 },
    config: config.molasses,
  });

  const rightEntrance = useSpring({
    from: { x: 400 },
    to: { x: 10 },
    config: config.molasses,
  });

  return (
    <>
      <Link to='/search' style={{ textDecoration: 'none', color: '#6b6b6b' }}>
        <div className='backToSearch'>
          <ArrowCircleLeftOutlinedIcon
            sx={{
              fontSize: '60px',
              ml: 1,
              mt: 1,
            }}
            className='arrowLeft'
          />
          <h1>{mainValve.serial}</h1>
        </div>
      </Link>

      <div className='valveContainer'>
        <div className='valveDevice'>
          <Devices
            image={mainValve.image}
            serial={mainValve.serial}
            type={mainValve.type}
            location={mainValve.location}
            status={mainValve.status}
          />
        </div>

        <animated.div
          className='valveInfo'
          style={isMobile ? { ...ascendFromBottom } : { ...rightEntrance }}
        >
          <div className='valveHeader'>
            <div className='icons'>
              <PrecisionManufacturingOutlinedIcon
                sx={{
                  fontSize: '50px',
                  color: '#6b6b6b',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                className='muiIcon'
              />
              <EqualizerOutlinedIcon
                sx={{
                  fontSize: '50px',
                  color: '#6b6b6b',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                className='muiIcon'
              />
              <TipsAndUpdatesOutlinedIcon
                sx={{
                  fontSize: '50px',
                  color: '#6b6b6b',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                className='muiIcon'
              />
              <SettingsOutlinedIcon
                sx={{
                  fontSize: '50px',
                  color: '#6b6b6b',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
                className='muiIcon'
              />
            </div>
            <div className='statsTitle'>
              <p className='selected'>Info</p>
              <p>Configure</p>
              <p>Reports</p>
            </div>
          </div>

          <div className='valveStatistics'>
            <div className='statsDetail'>
              <div className='integratedElec'>
                <div className='subTitle'>
                  <h3>Integrated electronics</h3>
                </div>

                <div className='tempAndHours'>
                  <div className='temperature'>
                    <div className='valveBtn'>
                      <p>25.2 C</p>
                    </div>

                    <p>Temperature</p>
                  </div>

                  <div className='operatingHours'>
                    <div className='valveBtn'>
                      <p>03 h 47 min</p>
                    </div>
                    <p>Operating hours</p>
                  </div>
                </div>
              </div>

              <div className='optionalChar'>
                <div className='subTitle'>
                  <h3>Optional characteristics</h3>
                </div>

                <div className='characteristicList'>
                  <p>
                    <span>Analog input value: </span> 15.7 mA
                  </p>
                  <p>
                    <span>Spool position: </span> 68.4 %
                  </p>
                  <p>
                    <span>Pressure (P): </span> 35.2 bar
                  </p>
                  <p>
                    <span>Flow torque: </span> 520 mNm
                  </p>
                </div>
              </div>

              <div className='charts'>
                <div className='subTitle'>
                  <h3>Charts</h3>
                </div>

                <div className='agGridContainer'>
                  <Charts />
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default Valve;
