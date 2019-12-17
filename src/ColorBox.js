import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    
      const newValue=this.props.opacity;
        return newValue>=0.2? null :(
      <div className="color-box" style={{opacity: newValue}}>
        {/* your conditional code here! */}
        <ColorBox opacity={newValue-0.1}/>
      </div>
    )
  }

}
