// Generated by CoffeeScript 1.8.0
var axispos, margin;

margin = {
  left: 80,
  top: 40,
  right: 40,
  bottom: 40,
  inner: 5
};

axispos = {
  xtitle: 25,
  ytitle: 50,
  xlabel: 5,
  ylabel: 5
};

d3.json("data.json", function(data) {
  var mychart;
  mychart = cichart().margin(margin).axispos(axispos);
  return d3.select("div#chart1").datum(data).call(mychart);
});
