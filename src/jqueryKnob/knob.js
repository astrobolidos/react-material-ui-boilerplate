var React = require('react');
var ReactDOM = require('react-dom')
var PropTypes = React.PropTypes;

export class Knob extends React.Component {
  constructor (props) {
    super(props);
    this.state = { val: 75 }
  }

  render () {
    console.log(this.state.val)

    return <input type="text" value={this.state.val} className="dial" onChange={this.handleChange}/>
  }

  componentDidMount = () => {
      let node = ReactDOM.findDOMNode(this);

      let knob = $(node).knob();
  }

  handleChange (evt) {
     console.log(evt)

    this.setState( {val: evt.src.val})
  }
}
