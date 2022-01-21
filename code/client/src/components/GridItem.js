import React from 'react';

function GridItem({row, col, item}) {
  return <div className = "grid-item">
    <div id={row.toString() + "-" + col.toString()}>
    {row.toString() + "-" + col.toString() }
    {item["inverted"]}
    </div>
  </div>;
}

export default GridItem;
