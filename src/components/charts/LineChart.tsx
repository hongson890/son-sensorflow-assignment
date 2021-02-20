import * as d3 from 'd3';
import React, { useEffect } from 'react';

type LineChartProps = {
  data: any[];
  width: number;
  height: number;
  element: string;
  margin: any;
};

export const LineChart = (props: LineChartProps) => {
  useEffect(() => {
    drawChart();
  }, []);

  function drawChart() {
    const w = props.width;
    const h = props.height;
    const data = props.data.map((item) => {
      item.date = d3.timeParse('%Y-%m-%d')(item.date);
      return item;
    });

    let svg = d3
      .select(props.element)
      .append('svg')
      .attr('width', props.width + props.margin.left + props.margin.right)
      .attr('height', props.height + props.margin.top + props.margin.bottom)
      .append('g')
      .attr('transform', `translate(${props.margin.left},${props.margin.top})`);

    // Add X axis --> it is a date format
    const xScale = d3
      .scaleTime()
      .domain(
        // @ts-ignore
        d3.extent(data, (d: any) => {
          return d.date;
        }),
      )
      .range([0, w]);

    svg
      .append('g')
      .attr('transform', `translate(0,${props.height})`)
      .call(d3.axisBottom(xScale));

    // Add Y axis
    const yScale = d3
      .scaleLinear()
      // @ts-ignore
      .domain([
        0,
        d3.max(data, (d: any) => {
          return +d.value;
        }),
      ])
      .range([props.height, 0]);
    svg.append('g').call(d3.axisLeft(yScale));

    // Add line
    const line = d3
      .line()
      .x((d: any) => xScale(d.date))
      .y((d: any) => yScale(d.value));

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'grey')
      .attr('d', line);
  }
  return <div className="line-chart"> </div>;
};
