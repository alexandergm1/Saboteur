import React from 'react';
import "../css/GridItems.css"
import "../css/Sizing.css"


function GridItem({row, col, item}) {
  
  let dummyVal = "true"
  if(item.inverted === false){ dummyVal = "false"}


  return <div className = "grid-item" style={{backgroundImage: `url(${item.image_url})`, backgroundSize: 'cover'}}>
    <div id={row.toString() + "-" + col.toString()}>
    {row.toString() + "-" + col.toString()}<br></br>
    <div id={row.toString() + "-" + col.toString()}>
    
    </div>
  </div>
  </div>
}

export default GridItem