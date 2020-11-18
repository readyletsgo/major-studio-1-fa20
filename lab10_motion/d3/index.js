const H = window.innerHeight;
const W = window.innerWidth;

const r = 10;
const rando = v => Math.min(v - 1.5 * r, Math.max(1.5 * r, Math.random() * v));

d3.select(".interactive")
  .append("svg")
  .attr("height", `${H}px`)
  .attr("width", `${W}px`)
  .selectAll("circle")
  .data(d3.range(100))
  .join("circle")
  .attr("r", r)
  .attr("cx", d => rando(W))
  .attr("cy", d => rando(H))
  .on("click", function() {
    const el = d3.select(this);
    const cx = el.attr("cx");
    const cy = el.attr("cy");
    el.transition()
      .attr("fill", "red")
      .duration(750)
      .attr("cx", rando(W))
      .attr("cy", rando(H))
      .on("end", function() {
        d3.select(this)
          .transition()
          .attr("fill", "black");
      });
  });
