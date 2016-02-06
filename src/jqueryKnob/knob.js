var React = require('react');
var ReactDOM = require('react-dom')
var PropTypes = React.PropTypes;

export class Knob extends React.Component {
  constructor (props) {
    super(props);
    this.state = { val: 75 }
  }

  render () {
    // console.log(this.state.val)
    return <input value={this.state.val} onClick={this.handleClick} onChange={this.handleChange}/>
    // return <div/>
  }

  handleClick = (evt) => {
    console.log(evt)
    console.log(this)
    this.renderKnob(this.props)
  }

  handleChange (evt) {
    console.log(evt)
    this.knob.val(33)
    this.knob.trigger('change')
  }

  renderKnob = (props) => {
    // decide to use newProps from `componentWillReceiveProps` or to use
    // existing props from `componentDidMount`
    props = props || this.props;

    // 5) make a new rendering tree, we've now hidden the DOM
    //    manipulation from jQuery UI dialog and then continued
    //    rendering with React
    ReactDOM.render(<div>{props.children}</div>,this.node)

    this.knob.val(44);
    this.knob.trigger('change');
  }

  componentDidMount = () => {
      this.node = ReactDOM.findDOMNode(this);
      let component = this;

      this.knob = $(this.node).knob({
        fgColor: "#00BBA6",
            bgColor: "#666666",
        'release': function(v) { component.handleChange },
        change: function(v) { this.handleChange }});
      this.renderKnob();
  }

  componentWillReceiveProps = (newProps) => {
    console.log('cwrp')
    this.renderKnob(newProps)
  }

}
