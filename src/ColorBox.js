import React, { Component } from 'react';

export default class ColorBox extends Component {
  

  render() {
    let newValue = this.props.opacity - 0.1;
    return this.props.opacity >= 0.2 ?  ( <div style={{opacity: 1}}>
        <ColorBox  opacity={newValue} />
      </div>): null
    
}}
