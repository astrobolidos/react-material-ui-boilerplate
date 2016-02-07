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
      id: this.props.name,
      width: 200,
      height: 200
    }, this.getChartState());
  }

  componentDidUpdate = () => {
    let el =  ReactDOM.findDOMNode(this);
    d3Chart.update(el, {
      id: this.props.name,
      width: 200,
      height: 200
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
      <div id={"completion-chart" + this.props.name} style={{float:'left', margin: 20}}></div>
    );
  }
}
