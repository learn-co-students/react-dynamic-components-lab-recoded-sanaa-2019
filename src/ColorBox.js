import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let dynamicOp = this.props.opacity;
    if (dynamicOp >= 0.2){
        return(
          <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={dynamicOp-0.1} />
          </div>
        )
      
    }else{
      return (
        null
      )
    }
    
  }

}