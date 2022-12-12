import { AgChartsReact } from 'ag-charts-react';
import { useState } from 'react';

const chartData = [
  {
    quarter: 'Q1',
    spending: 1000,
  },
  {
    quarter: 'Q2',
    spending: 2300,
  },
  {
    quarter: 'Q3',
    spending: 3200,
  },
  {
    quarter: 'Q4',
    spending: 4100,
  },
];
const chartData2 = [
  {
    quarter: 'Q1',
    spending: 1200,
  },
  {
    quarter: 'Q2',
    spending: 4000,
  },
  {
    quarter: 'Q3',
    spending: 3300,
  },
  {
    quarter: 'Q4',
    spending: 2200,
  },
];

const chartData3 = [
  {
    quarter: 'Q1',
    spending: 1000,
  },
  {
    quarter: 'Q2',
    spending: 2000,
  },
  {
    quarter: 'Q3',
    spending: 3000,
  },
  {
    quarter: 'Q4',
    spending: 4300,
  },
];

const Charts = () => {
  const [options, setOptions] = useState({
    autoSize: true,
    series: [
      {
        data: chartData,
        xKey: 'quarter',
        yKey: 'spending',
        yName: 'Our Temperature',
        stroke: '#6b6b6b',
        marker: {
          fill: '#03a9f4',
          stroke: '#0276ab',
        },
      },
      {
        data: chartData2,
        xKey: 'quarter',
        yKey: 'spending',
        yName: 'Competitors Temperature',
        stroke: '#00aec7',
        marker: {
          fill: '#8bc24a',
          stroke: '#c1f8ff',
        },
      },
      {
        data: chartData3,
        xKey: 'quarter',
        yKey: 'spending',
        yName: 'Competitors Temperature',
        stroke: '#00aec7',
        marker: {
          fill: '#8bc24a',
          stroke: '#c1f8ff',
        },
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
      },
      {
        type: 'number',
        position: 'left',
        label: {
          format: '#{.1f} °C',
        },
      },
    ],
    legend: {
      enabled: false,
    },
  });

  return <AgChartsReact options={options} />;
};

export default Charts;
