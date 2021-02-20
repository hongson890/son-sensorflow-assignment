import * as d3 from 'd3';
import React, { useEffect } from 'react';

type MarbleChartProps = {
  data: any[];
  width: number;
  height: number;
  element: string;
  margin: any;
  tickers: any[];
  // colorScale: any;
};

export const MarbleChart = (props: MarbleChartProps) => {
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
      .attr('width', props.width - props.margin.left - props.margin.right)
      .attr('height', props.height - props.margin.top - props.margin.bottom)
      .append('g')
      .attr('transform', `translate(${props.margin.left},${props.margin.top})`);

    // Add X axis --> it is a date format
    const x = d3
      .scaleBand()
      .domain(['stable', 'watch', 'risk_reduce', 'severe'])
      .range([0, props.width])
      .padding(0.3);
    const colorScale = {
      severe: 'red',
      risk_reduce: 'orange',
      watch: 'yellow',
      stable: 'grey',
    };
    const simulation = d3
      .forceSimulation()
      .force(
        'y',
        d3
          .forceY()
          .strength(0.1)
          .y(props.height / 2),
      )
      .force('charge', d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
      .force(
        'collide',
        d3.forceCollide().strength(0.1).radius(27).iterations(1),
      ) // Force that avoids circle overlapping
      .alphaTarget(0.03);
    const dragstarted = function (event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.03).restart();
      d.fx = event.x;
      d.fy = event.y;
    };
    const dragged = function (event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    };
    const dragended = function (event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.03);
      d.fx = null;
      d.fy = null;
    };
    const group = 'risk';

    simulation
      .force(
        'x',
        d3
          .forceX()
          .strength(0.5)
          // @ts-ignore
          .x((d) => x(d.output) + x.bandwidth()),
      )
      .force('center', null);

    // @ts-ignore
    const node = svg
      .append('g')
      .selectAll('circle')
      .data(props.data, (d: any) => d.ticker)
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr('r', 15)
            .attr('cx', props.width / 2)
            .attr('cy', props.height / 2)
            // @ts-ignore
            .style('fill', (d: any) => colorScale[d.output] || 'black')
            .style('fill-opacity', 0.5)
            // .style("stroke-opacity", 0.7)
            // @ts-ignore
            .attr('stroke', (d: any) => colorScale[d.output] || 'black')
            .style('stroke-width', 4)
            .style('cursor', 'pointer'),
        (update) => update,
        // .attr("cx", vis.WIDTH / 2)
        // .attr("cy", vis.HEIGHT / 2)
        // .attr("cx", vis.WIDTH / 2)
        // .attr("cy", vis.HEIGHT / 2)
        (exit) => exit.remove(),
      );
    simulation
      .nodes(props.tickers)
      // @ts-ignore
      .on('tick', function (d) {
        node
          .attr('cx', function (d1) {
            return d1.x;
          })
          .attr('cy', function (d2) {
            return d2.y;
          });
      });
  }
  return <div className="line-chart"> </div>;
};
