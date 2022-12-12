import valve from '../../assets/valve.jpg';
import valveGrey from '../../assets/valveGrey.png';
import extensionValve from '../../assets/extensionValve.png';

const devices = [
  {
    image: valve,
    serial: 'SN0000f43',
    type: 'S4 Pro',
    location: 'Site1, Cheddar, UK',
    status: 'Active',
  },
  {
    image: valveGrey,
    serial: 'SN0000g96',
    type: 'S6 Pro',
    location: 'Site1, Cheddar, UK',
    status: 'Error',
  },
  {
    image: extensionValve,
    serial: 'SN0000h56',
    type: 'FAST',
    location: 'Vehicle 1, Chester, UK',
    status: 'Active',
  },
];

export default devices;
