import React, { Component } from 'react';
import { TouchableOpacity as Button  } from 'react-native';

class TouchableOpacity extends Component {
  render() {
    return (
      <Button disabled={this.props.disabled}
              style={{
                marginTop: this.props.marginTop,
                marginBottom: this.props.marginBottom,
                marginLeft: this.props.marginLeft,
                marginRight: this.props.marginRight,
                borderRadius:this.props.borderRadius,
                width: this.props.width,
                height:this.props.height,
                alignItems: this.props.alignItems,
                justifyContent:this.props.justifyContent,
                backgroundColor:this.props.backgroundColor,
                paddingTop: this.props.paddingTop,
                paddingBottom: this.props.paddingBottom,
                paddingLeft: this.props.paddingLeft,
                paddingRight: this.props.paddingRight,
              }}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default TouchableOpacity;