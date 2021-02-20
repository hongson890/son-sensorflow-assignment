import React from 'react';
import { BarChart } from '../../components/charts/BarChart';
import './BarChartDemo.css';

const chartConfigs = {
  data: [12, 5, 6, 6, 9, 10],
  width: 700,
  height: 500,
  element: '#linechartDiv',
};

export const BarChartDemo: React.FC = () => {
  return (
    <div className="App">
      <div id="linechartDiv" className="chart-demo">
        <BarChart
          element={chartConfigs.element}
          data={chartConfigs.data}
          width={chartConfigs.width}
          height={chartConfigs.height}
        />
      </div>
    </div>
  );
};
