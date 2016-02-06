import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
var d3Chart = require('./d3Chart')

export class D3 extends React.Component {
  propTypes: {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
  }

  componentDidMount = () => {
    let el =  ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
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
      <div className="Chart">zxcv</div>
    );
  }
}
