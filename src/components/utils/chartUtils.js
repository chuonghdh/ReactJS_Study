import * as d3 from "d3";

export const createScales = (data, width, height) => {
  const keys = ["item1", "item2", "item3"];
  const stackedData = d3.stack().keys(keys)(data);

  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.month))
    .range([0, width])
    .padding(0.2);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(stackedData[stackedData.length - 1], (d) => d[1])])
    .nice()
    .range([height, 0]);

  const colorScale = d3
    .scaleOrdinal()
    .domain(keys)
    .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

  return { xScale, yScale, colorScale };
};

export const drawBars = (svg, data, xScale, yScale, colorScale) => {
  const keys = ["item1", "item2", "item3"];
  const stackedData = d3.stack().keys(keys)(data);

  svg
    .selectAll("g.layer")
    .data(stackedData)
    .join("g")
    .attr("class", "layer")
    .attr("fill", (d) => colorScale(d.key))
    .selectAll("rect")
    .data((d) => d)
    .join("rect")
    .attr("x", (d) => xScale(d.data.month))
    .attr("y", (d) => yScale(d[1]))
    .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
    .attr("width", xScale.bandwidth());
};

export const drawAxes = (svg, xScale, yScale, height) => {
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

  svg.append("g").call(d3.axisLeft(yScale));
};

export const drawLegend = (svg, colorScale, width) => {
  const keys = ["item1", "item2", "item3"];
  const legend = svg
    .selectAll(".legend")
    .data(keys)
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("transform", (d, i) => `translate(0, ${i * 20})`);

  legend
    .append("rect")
    .attr("x", width - 20)
    .attr("width", 18)
    .attr("height", 18)
    .attr("fill", (d) => colorScale(d));

  legend
    .append("text")
    .attr("x", width - 24)
    .attr("y", 9)
    .attr("dy", "0.35em")
    .style("text-anchor", "end")
    .text((d) => d);
};

export const createLineScales = (data, width, height) => {
  const xScale = d3
    .scalePoint()
    .domain(data.map((d) => d.month))
    .range([0, width])
    .padding(0.5);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => Math.max(d.item1, d.item2, d.item3))])
    .nice()
    .range([height, 0]);

  const colorScale = d3
    .scaleOrdinal()
    .domain(["item1", "item2", "item3"])
    .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

  return { xScale, yScale, colorScale };
};

export const drawLineChart = (svg, data, xScale, yScale, colorScale) => {
  const keys = ["item1", "item2", "item3"];

  keys.forEach((key) => {
    const line = d3
      .line()
      .x((d) => xScale(d.month))
      .y((d) => yScale(d[key]));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colorScale(key))
      .attr("stroke-width", 2)
      .attr("d", line);
  });
};