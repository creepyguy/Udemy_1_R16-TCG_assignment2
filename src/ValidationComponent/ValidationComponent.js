import React from 'react';

const   ValidationComponent = (props) => {
  let check = null;
  if (props.textLength <= 5) {
    check = <p> Text too short </p> ;
  }
  else if(props.textLength > 5){
    check = <p> Text long enough</p> ;
  }
  return check;

}
export default ValidationComponent;
