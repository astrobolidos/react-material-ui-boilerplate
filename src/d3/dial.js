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
      width: 370,
      height: 370
    }, this.getChartState());
  }

  componentDidUpdate = () => {
    let el =  ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  }

  getChartState = () => {
    return {
      data: this.props.data,
      domain: this.props.domain
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
