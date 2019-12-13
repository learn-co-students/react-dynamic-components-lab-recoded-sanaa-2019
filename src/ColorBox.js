import React, { Component } from 'react';

export default class ColorBox extends Component {



 render() {
   let opa = this.props.opacity;
 if (opa >= 0.2){
        return(
          <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={opa-0.1} />
          </div>
        )
      
    }
 
 else {
   return (null);
 }

}
}

