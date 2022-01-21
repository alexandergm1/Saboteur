import React from 'react';

function GridItem({row, col}) {
  return <div className = "grid-item">
    <div id={row.toString() + col.toString()}>
    {row.toString() + "-" + col.toString() }
    </div>
  </div>;
  
}

export default GridItem;
