import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
var d3Chart = require('./dialChart')

export class D3Knob extends React.Component {
  propTypes: {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
  }

  componentDidMount = () => {
    let el =  ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: 120,
      height: 120
    }, this.getChartState());
  }

  componentDidUpdate = () => {
    let el =  ReactDOM.findDOMNode(this);
    d3Chart.update(el, {
      width: 120,
      height: 120
    }, this.getChartState());
  }

  getChartState = () => {
    return {
      val: this.props.val
    };
  }

  componentWillUnmount = () => {
    let el =  ReactDOM.findDOMNode(this);
    d3Chart.destroy(el);
  }

  render () {
    return (
      <div className="completion-chart" style={{float:'left', border:'1px solid blue'}}></div>
    );
  }
}
