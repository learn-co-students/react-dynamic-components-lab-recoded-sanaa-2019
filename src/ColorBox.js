import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    
    console.log(this.props.opacity)
    if(this.props.opacity>=0.2){
      let value=this.props.opacity-0.1;
        return (
          <div className="color-box" style={{opacity:this.props.opacity }}>
            {/* your conditional code here! */}
            <ColorBox opacity={value}/>
          </div>
        )
    }
    else return null;
    
  }

}
