import * as d3 from 'd3';
import React, { useEffect } from 'react';

type LineChartProps = {
  data: number[];
  width: number;
  height: number;
  element: string;
};

export const BarChart = (props: LineChartProps) => {
  useEffect(() => {
    drawChart();
  }, []);

  function drawChart() {
    const w = props.width;
    const h = props.height;

    const svg = d3
      .select(props.element)
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('margin-left', 100);

    svg
      .selectAll('rect')
      .data(props.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d) => d * 10)
      .attr('fill', 'green');

    svg
      .selectAll('text')
      .data(props.data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d - 3);
  }
  return <div className="line-chart"> </div>;
};
