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
  render() {
    const { pathname } = this.props.location

    return (<div>
      <AppBar title="Test Appr" />

      <Knob />


    </div>
    )
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
