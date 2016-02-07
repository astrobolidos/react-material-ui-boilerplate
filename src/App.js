import React from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-transition-group'
import { createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'
import { AppBar, IconMenu, IconButton, MenuItem, NavigationClose, Badge } from 'material-ui'
import Paper from 'material-ui/lib/paper'

import { LPGridList } from './gridList';
import { LPTable } from './table';
import { LPTabs } from './tabs';
import { Knob } from './jqueryKnob/knob'
import { D3 } from './d3/d3'
import { D3Knob } from './d3/dial'

var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
];

const history = useBasename(createHistory)({
  basename: '/animations'
})

const MyRawTheme = require('./customTheme');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class AppBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: sampleData, val: [0.6, 0.7, 0.32, 0.44, 0.2, 0.3, 0.4,0.5,0.6] }
  }

      // <D3 data={this.state.data} domain={{x: [0, 30], y: [0, 100]}}/>
  render = () => {
    const { pathname } = this.props.location

    return (<div>
      <AppBar title="Test Appr" onClick={this.onClick}/>

      <D3Knob name={'k1'} val={this.state.val[0]}/>
      <D3Knob name={'k2'} val={this.state.val[1]}/>
      <D3Knob name={'k3'} val={this.state.val[2]}/>
      <D3Knob name={'k4'} val={this.state.val[3]}/>
      <D3Knob name={'k5'} val={this.state.val[4]}/>
      <D3Knob name={'k6'} val={this.state.val[5]}/>
      <D3Knob name={'k7'} val={this.state.val[6]}/>
      <D3Knob name={'k8'} val={this.state.val[7]}/>
      <D3Knob name={'k9'} val={this.state.val[8]}/>
    </div>
    )
  }

  onClick = () => {
    console.log('onClick')
    let data = this.state.data;
    data.push({id: '5fbmz432'+Math.random(), x: (Math.random() * (12-1) + 1), y: (Math.random() * (22-1) + 1), z: 3})

    var vals = this.state.val;
    for (var i = 0; i < vals.length; i++) {
      vals[i] = Math.random() * (1-0) + 0;
    }


    this.setState({data:data, val:vals})
  }
}

class Page1 extends React.Component {
  render() {
    return (
      <div className="Image">
        <h1>Page 1</h1>
        <p><Link to="/page1" activeClassName="link-active">A link to page 1 should be active</Link>. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <Link to="/page2" activeClassName="link-active">A link to page 2 should be inactive</Link>. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <div className="Image">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do <Link to="/page2" activeClassName="link-active">a link to page 2 should also be active</Link> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

export class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={AppBody}>
          <Route path="page1" component={Page1} />
          <Route path="page2" component={Page2} />
        </Route>
      </Router>
  )}
}
