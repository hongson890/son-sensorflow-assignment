import React from 'react';
import './BarChartDemo.css';
import mockData from '../data/line-chart.json';
import { MarbleChart } from '../../components/charts/MarbleChart';
import tickers from '../data/tickers';

const chartConfigs = {
  data: tickers,
  width: 1400,
  height: 700,
  element: '#linechartDiv',
  margin: {
    left: 25,
    top: 10,
    right: 10,
    bottom: 25,
  },
};

export const MarbleChartDemo: React.FC = () => {
  return (
    <div className="App">
      <div id="linechartDiv">
        <MarbleChart
          element={chartConfigs.element}
          data={chartConfigs.data}
          width={chartConfigs.width}
          height={chartConfigs.height}
          margin={chartConfigs.margin}
          tickers={tickers}
        />
      </div>
    </div>
  );
};
