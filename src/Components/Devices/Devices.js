import './Devices.css';
const Devices = ({ image, serial, type, location, status }) => {
  return (
    <div className='deviceContainer'>
      <img src={image} alt='' />
      <div className={`deviceInfo`}>
        <div className='deviceDescription'>
          <p className='serial'>
            S/N: <span>{serial}</span>
          </p>
          <p>
            Type: <span>{type}</span>
          </p>
          <p>
            Location: <span>{location}</span>
          </p>
          <p>
            Status:{' '}
            <span
              className={`${
                status === 'Error' ? 'errorStatus' : 'activeStatus'
              } errorStatus`}
            >
              {status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Devices;
