import React, { Component } from 'react';
import { StyleSheet, View  } from 'react-native';
import TextInput from './Component/Control/TextInput';
import Text from './Component/Control/Text';
import TouchableOpacity from './Component/Control/TouchableOpacity';
import  * as method from './Method/Method';

export default class  Login extends Component {
    state = {
      btnBackGround: '#b2dffc',
      btnDisable   : true
    }

    constructor(props){
      super(props)
      method.gfs_pgm_reducer('login')
    }
  
    render(){
      return (
        <View style={styles.container}>
          <Text pgm           = 'login'
                id            = 'title'
                fontSize      = {30}
                fontWeight    = 'bold'
                color         = 'black'
                marginTop     = {25}
                marginBottom  = {20}
                textAlign     = 'center'
                textTransform = 'capitalize'>Login</Text>
          
          <TextInput pgm          = 'login'
                     id           = 'id'
                     placeholder  = 'ID' 
                     width        = '80%'
                     height       = {40}
                     borderRadius = {3}
                     borderWidth  = {1}
                     borderStyle  = 'solid'
                     borderColor  = '#DBDBDB'
                     marginTop    = {3}
                     paddingLeft  = {10}>
          </TextInput>
          
          <TextInput pgm          = 'login'
                     id           = 'pwd'
                     placeholder  = 'Password' 
                     width        = '80%'
                     height       = {40}
                     borderRadius = {3}
                     borderWidth  = {1}
                     borderStyle  = 'solid'
                     borderColor  = '#DBDBDB'
                     marginTop    = {3}
                     paddingLeft  = {10}
                     secureTextEntry >
          </TextInput>
          
          <TouchableOpacity disabled        = {this.state.btnDisable}
                            marginTop       = {20}
                            borderRadius    = {3}
                            width           = '80%'
                            height          = {40}
                            alignItems      = 'center'
                            justifyContent  = 'center'
                            backgroundColor = {this.state.btnBackGround}
          >
            <Text pgm='login'
                  id='login_title' color='white'>Login</Text>
          </TouchableOpacity>
        </View>
      )
    };
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 100
    }
  });