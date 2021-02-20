import React from 'react';
import { LineChart } from '../../components/charts/LineChart';
import './BarChartDemo.css';
import mockData from '../data/line-chart.json';

const chartConfigs = {
  data: mockData,
  width: 370,
  height: 360,
  element: '#linechartDiv',
  margin: {
    left: 60,
    top: 10,
    right: 30,
    bottom: 30,
  },
};

export const LineChartDemo: React.FC = () => {
  return (
    <div className="App">
      <div id="linechartDiv" className="chart-demo">
        <LineChart
          element={chartConfigs.element}
          data={chartConfigs.data}
          width={chartConfigs.width}
          height={chartConfigs.height}
          margin={chartConfigs.margin}
        />
      </div>
    </div>
  );
};
