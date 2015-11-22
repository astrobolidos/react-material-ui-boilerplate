  import React from 'react'
  import Table from 'material-ui/lib/table/table';
  import TableBody from 'material-ui/lib/table/table-body';
  import TableFooter from 'material-ui/lib/table/table-footer';
  import TableHeader from 'material-ui/lib/table/table-header';
  import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
  import TableRow from 'material-ui/lib/table/table-row';
  import TableRowColumn from 'material-ui/lib/table/table-row-column';
  import IconButton from 'material-ui/lib/icon-button';
  import FlatButton from 'material-ui/lib/flat-button';
  import RaisedButton from 'material-ui/lib/raised-button';
  import FontIcon from 'material-ui/lib/font-icon';
   
// TODO:show tooltip on table
// TODO: show button animation on hover
// TODO:

  export class LPTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { windowHeight: this.getTableHeight()}
      this.updateDimensions = this.updateDimensions.bind(this)
    }
    componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
      this.setState({windowHeight: this.getTableHeight()})
    }
    getTableHeight() {
      var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 170;
      return height + 'px'
    }
    render () {
      return (<Table
        selectable={false}
        height={this.state.windowHeight}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>RecordType</TableHeaderColumn>
            <TableHeaderColumn>Sugested Encryption</TableHeaderColumn>
            <TableHeaderColumn>Selected Encryption</TableHeaderColumn>
            <TableHeaderColumn>Sugested Hash Algorithm</TableHeaderColumn>
            <TableHeaderColumn>Selected Hash Algorithm</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
          {items.map((item, i) => {


            return <TableRow key={item.RecordTypeId} style={{borderLeft: '3px solid green'}}>
                <TableRowColumn>{item.Description}</TableRowColumn>
                <TableRowColumn>{item.SugestedEncryption}</TableRowColumn>
                <TableRowColumn>{item.Encryption || 'None'}</TableRowColumn>
                <TableRowColumn>{item.SugestedHash}</TableRowColumn>
                <TableRowColumn>{item.Hash || 'None'}</TableRowColumn>
                <TableRowColumn>
                  <IconButton iconClassName="material-icons roundBackground"
                    tooltipPosition="top-center"
                    tooltip="Edit"
                    tooltipStyles={{top:15, left: 30}}
                    iconStyle={{fontSize:20}}
                    >edit</IconButton>

                </TableRowColumn>
              </TableRow>
          })}
          </TableBody>
      </Table>)
    }
  }

  // <RaisedButton style={{width:'42px !important', height: 42}}>
  //   <FontIcon className="material-icons">edit</FontIcon>
  // </RaisedButton>
  //

  var items = [
  {"RecordTypeId":1,"Description":"Record Type 1","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":2,"Description":"Record Type 2","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":3,"Description":"Record Type 3","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":4,"Description":"Record Type 4","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":5,"Description":"Record Type 5","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":6,"Description":"Record Type 6","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":7,"Description":"Record Type 7","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":8,"Description":"Record Type 8","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":9,"Description":"Record Type 9","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":10,"Description":"Record Type 10","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":11,"Description":"Record Type 11","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":12,"Description":"Record Type 12","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":13,"Description":"Record Type 13","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":14,"Description":"Record Type 14","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":15,"Description":"Record Type 15","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":16,"Description":"Record Type 16","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":17,"Description":"Record Type 17","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":18,"Description":"Record Type 18","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":19,"Description":"Record Type 19","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":20,"Description":"Record Type 20","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":21,"Description":"Record Type 21","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":22,"Description":"Record Type 22","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":23,"Description":"Record Type 23","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":24,"Description":"Record Type 24","SugestedEncryption":"Rinjdael","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":25,"Description":"Record Type 25","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":26,"Description":"Record Type 26","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":27,"Description":"Record Type 27","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":28,"Description":"Record Type 28","SugestedEncryption":"Rinjdael","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":29,"Description":"Record Type 29","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":30,"Description":"Record Type 30","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":31,"Description":"Record Type 31","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":32,"Description":"Record Type 32","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":33,"Description":"Record Type 33","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":34,"Description":"Record Type 34","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":35,"Description":"Record Type 35","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":36,"Description":"Record Type 36","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":37,"Description":"Record Type 37","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":38,"Description":"Record Type 38","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":39,"Description":"Record Type 39","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":40,"Description":"Record Type 40","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":41,"Description":"Record Type 41","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":42,"Description":"Record Type 42","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":43,"Description":"Record Type 43","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":44,"Description":"Record Type 44","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":45,"Description":"Record Type 45","SugestedEncryption":"Tripledes","SugestedHash":"None","Encryption":null,"Hash":null},
  {"RecordTypeId":46,"Description":"Record Type 46","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":47,"Description":"Record Type 47","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":48,"Description":"Record Type 48","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null},
  {"RecordTypeId":49,"Description":"Record Type 49","SugestedEncryption":"Tripledes","SugestedHash":"MD5","Encryption":null,"Hash":null}]
