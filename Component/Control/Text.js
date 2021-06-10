import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as Input  } from 'react-native';

class Text extends Component {
  render() {
    return (
      <Input style={{
               fontSize: this.props.fontSize,
               fontWeight: this.props.fontWeight,
               width: this.props.width,
               height: this.props.height,
               borderRadius: this.props.borderRadius,
               borderWidth: this.props.borderWidth,
               borderStyle: this.props.borderStyle,
               borderColor: this.props.borderColor,
              //  margin : this.props.margin,
               marginTop: this.props.marginTop,
               marginBottom: this.props.marginTop,
               marginLeft: this.props.marginLeft,
               marginRight: this.props.marginRight,
              //  padding : this.props.padding,
               paddingTop: this.props.paddingTop,
               paddingBottom: this.props.paddingBottom,
               paddingLeft: this.props.paddingLeft,
               paddingRight: this.props.paddingRight,
               color: this.props.color
             }}>
        {this.props.children}
      </Input>
    );
  }
}

Text.propTypes = {
  pgm : PropTypes.string.isRequired,
  id  : PropTypes.string.isRequired
}

export default Text;