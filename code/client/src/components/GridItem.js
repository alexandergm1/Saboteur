import React from 'react';
import "../css/GridItems.css"


function GridItem({row, col, item}) {
  
  let dummyVal = "true"
  if(item.inverted === false){ dummyVal = "false"}

  return <div className = "grid-item">
    <img src={item.image_url} alt="start-card"></img>
    <div id={row.toString() + "-" + col.toString()}>
    {row.toString() + "-" + col.toString()}<br></br>
    {dummyVal}
    </div>
  </div>;
}

export default GridItem;
