import React from 'react'
import { Tabs, Tab, SwipeableViews } from 'material-ui'

export class LPTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: "0" }
  }
  _handleChangeTabs(e) {
    console.log(e)
  }
  _handleChangeIndex(e) {
    console.log(e);
  }
  render() {
    return (<div>
      <h1>welcome to the jungle</h1>
        <Tabs style={{color:'green !important'}} tabItemContainerStyle={{background:'gray', color:'black !important'}} contentContainerStyle={{color:'red'}} inkBarStyle={{color:'blue'}}>
          <Tab label="Entry Survey">asdf</Tab>
          <Tab label="Basic Inventory"></Tab>
          <Tab label="Virtualization"></Tab>
          <Tab label="Cluster Info"></Tab>
          <Tab label="License Demmand"></Tab>
          <Tab label="Entitlements"></Tab>
          <Tab label="Compliance"></Tab>
        </Tabs>
    </div>
    );
  }
}
