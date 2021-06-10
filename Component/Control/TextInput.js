import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { TextInput as Input  } from 'react-native';
import  * as method from '../../Method/Method';

class TextInput extends Component {
  state = {
    value : ''
  }
  
  constructor(props){
    super(props)

    if(method.gfo_getInput(props.pgm, props.id) !== undefined){
      //김경현
      // method.gfc_getMultiLang('dup', '인풋 아이디 중복입니다. > ' + props.pgm + ', ' + props.id);
      return 
    } 

    method.gfs_dispatch(props.pgm, 'INITINPUT', 
      ({
        Input: {id   : props.id,
                Input: this}
      })
    );
  }

  getValue = () => {
    return this.state.value;
  }

  onChangeText = (e) => {
    this.setState({
      value: e
    });

    this.props.onChangeText(e);
  }

  render() {
    return (
      <Input placeholder={this.props.placeholder} 
             autoFocus={this.props.autoFocus}
             secureTextEntry={this.props.secureTextEntry}
             value={this.state.value}

             style={{
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
             }}
             onChange = {this.props.onChange}
             onChangeText = {
               e => this.onChangeText(e)
             }
             >
          
      </Input>
    );
  }
};

TextInput.propTypes = {
  pgm : PropTypes.string.isRequired,
  id  : PropTypes.string.isRequired
}

export default TextInput;