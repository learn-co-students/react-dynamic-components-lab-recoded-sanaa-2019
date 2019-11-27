import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    if(this.props.opacity >= 0.2){
      return (
        // an opacity prop should be passed to the child
        <div className="color-box" style={{ opacity: this.props.opacity }}>
        {/* the ColorBox component should render another ColorBox itself (recursive components!)<ColorBox/> */}
        {/* the passed opacity prop should be reduced by 0.1 */}
          <ColorBox opacity={this.props.opacity - 0.1} /> 
        </div>
      );

    }
    else if (this.props.opacity < 0.2) {
      return null;
    }
    
  }

}
