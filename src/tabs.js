import React from 'react'
import { Tabs, Tab, SwipeableViews, Paper } from 'material-ui'

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
    var tabTemplate =<span style={{height:14}}></span>

    return (<div>
      <h2 style={{margin: '5px auto', padding: '0 5', textAlign: 'center'}}>Oracle Compliance Test</h2>
      <Tabs
        tabItemContainerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'black'}}
        >
        <Tab label="Basic Inventory Consolidation">
          <div style={{display:'flex', flexFlow:'row wrap', alignItems:'stretch'}}>
            <Paper style={{width: '60%', minHeight:'90%'}}>a
<br/>
            asdf
          sadf<br/>
        asdf<br/><br/>
      asd<br/><br/><br/>
    fasdf</Paper>
            <Paper style={{width: '38%'}}>b</Paper>
          </div>


        </Tab>
        <Tab label="Virtualization Consolidation"></Tab>
        <Tab label="Cluster Consolidation"></Tab>
        <Tab label="License Demmand"></Tab>
        <Tab label="Entitlements"></Tab>
        <Tab label="Compliance"></Tab>
      </Tabs>
    </div>
    );
  }
}
