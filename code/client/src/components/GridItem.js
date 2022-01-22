import React from 'react';

function GridItem({row, col, item}) {
  
  let dummyVal = "true"
  if(item.inverted === false){ dummyVal = "false"}

  return <div className = "grid-item">
    {row.toString() + "-" + col.toString()}<br></br>
    {dummyVal}
    <div id={row.toString() + "-" + col.toString()}>
    
    </div>
  </div>;
}

export default GridItem;
