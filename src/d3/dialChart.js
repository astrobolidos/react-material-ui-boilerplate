var d3Chart = {};

var foreground = undefined;
var arc = undefined;

d3Chart.create = function(el, props, state) {
  var width = props.width,
      height = props.height,
      twoPi = 2 * Math.PI,
      progress = 0,
      total = 100,
      formatPercent = d3.format(".0%");

  var arc = d3.svg.arc()
      .startAngle(0)
      .innerRadius(140)
      .outerRadius(170)
  ;

  var svg = d3.select(el).append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr('fill', '#2E7AF9')
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



      arc = d3.svg.arc()
          .startAngle(0)
          .innerRadius(props.width/2 - 30)
          .outerRadius(props.width/2)
      ;

      var meter = svg.append("g")
          .attr("class", "progress-meter");

      meter.append("path")
          .attr("class", "background")
          .attr("fill", "#DFEAFD")
          .attr("d", arc.endAngle(twoPi));

      foreground = meter.append("path")
          .attr("class", "foreground"+props.id)
          .attr("fill", "#2E7AF9");

      var text = meter.append("text")
          .attr("text-anchor", "middle")
          .attr("class", "text"+props.id)
          .attr("font-size", "40px")
          text.text(formatPercent(state.val));

      var text2 = meter.append("text")
          .attr("y", 40)
          .attr("text-anchor", "middle")
          .attr("class", "text2");

      text2.text('progress');


  this.update(el, props, state);
};

d3Chart.update = function(el, props, state) {
  // Re-compute the scales, and render the data points
  // var scales = this._scales(el, state.domain);
  // this._drawPoints(el, scales, state.data);
  let progress = 0
  let percentage = state.val
  var formatPercent = d3.format(".0%")

  var i = d3.interpolate(progress, percentage);

  var text = d3.select(el).select('.text'+props.id);
  var foreground = d3.select(el).select('.foreground'+props.id);

  var  arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(props.width/2 - 30)
            .outerRadius(props.width/2)
        ;

  d3.select(el).transition().duration(1200).tween("progress", function (el) {
      return function (t, el) {
          progress = i(t);
          console.log(progress)
          foreground.attr("d", arc.endAngle(2 * Math.PI * progress));
          text.text(formatPercent(progress));
      };
  });

};

d3Chart.destroy = function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};



module.exports = d3Chart;
