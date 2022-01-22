import React from 'react';

function Card({row, col, card}) {
  return <div className = "card">
  <div id = {row.toString() + "-" + col.toString()}>
  {row.toString() + "-" + col.toString()}

  </div>
  </div>;
}

export default Card;
