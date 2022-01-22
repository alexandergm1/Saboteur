import React from 'react';
import "../css/GridItems.css"

function GridItem({row, col, item}) {
  return <div className = "grid-item">
    <div id={row.toString() + "-" + col.toString()}>
    <img src={item["image url"]}></img>
    {row.toString() + "-" + col.toString() }
    {item["inverted"]}
    </div>
  </div>;
}

export default GridItem;
