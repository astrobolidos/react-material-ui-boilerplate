import React from 'react'
import { IconButton, StarBorder } from 'material-ui'

const GridList = require('material-ui/lib/grid-list/grid-list');
const GridTile = require('material-ui/lib/grid-list/grid-tile');

var tilesData = [
  { title: 'test', img: '', featured:1 }
  ,{ title: 'test2', img: '', featured:0}
  ,{ title: 'test3', img: '', featured:0}
  ,{ title: 'test4', img: '', featured:0}
  ,{ title: 'test5', img: '', featured:0}
  ,{ title: 'test6', img: '', featured:0}
]

export class LPGridList extends React.Component {
  render () {
    return (
      <GridList
        cols={2}
        cellHeight={200}
        padding={1}
        style={{width: '80%', height: 640, overflowY: 'auto', minHight: '90%', marginLeft: 20 }}>
        {
          tilesData.map(tile => <GridTile
            title={tile.title}
            cols={tile.featured ? 2 : 1}
      rows={tile.featured ? 2 : 1}>
          this is your text, you should be prod of it.

          </GridTile>)
        }
      </GridList>
    )
  }
}
