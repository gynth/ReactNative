import React, { Component } from 'react';
import { StyleSheet, View  } from 'react-native';
import TextInput from './Component/Control/TextInput';
import Text from './Component/Control/Text';
import TouchableOpacity from './Component/Control/TouchableOpacity';
import  * as method from './Method/Method';
import { getDynamicSql_Mysql } from './Mysql/Mysql';

export default class  Login extends Component {
    state = {
      btnBackGround: '#b2dffc',
      btnDisable   : true
    }

    constructor(props){
      super(props)
      method.gfs_pgm_reducer('login')
    }

    onPress = (e) => {
      // console.log(e);

      const user_id = method.gfo_getInput('login', 'id').getValue();
      const pass_cd = method.gfo_getInput('login', 'pwd').getValue();

      getDynamicSql_Mysql(
        'Common/Common',
        'login',
        [{user_id,
          pass_cd}]
      ).then(
        result => {
          if(result.data.result){
            if(result.data.data.length === 0){
              console.log('로그인 정보가 잘못되었습니다.');
            }else{
              console.log('로그인 성공');
            }
          }else{
            console.log('로그인에 실패했습니다.')
          }
        }
      )
    };
  
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
                     paddingLeft  = {10}
                     
                     onChangeText = {e => {
                       const id = e;
                       const pwd = method.gfo_getInput('login', 'pwd').getValue();

                       if(id.length > 0 && pwd.length > 0){ 
                        this.setState({
                          btnBackGround: '#0095f6',
                          btnDisable: false
                        })
                       }else{
                         this.setState({
                           btnBackGround: '#b2dffc',
                           btnDisable: true
                         })
                       }
                     }}>
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
                     secureTextEntry
                     
                     onChangeText = {e => {
                       const id = method.gfo_getInput('login', 'id').getValue();
                       const pwd = e;

                       if(id.length > 0 && pwd.length > 0){ 
                        this.setState({
                          btnBackGround: '#0095f6',
                          btnDisable: false
                        })
                       }else{
                         this.setState({
                           btnBackGround: '#b2dffc',
                           btnDisable: true
                         })
                       }
                     }}
          >
          </TextInput>
          
          <TouchableOpacity disabled        = {this.state.btnDisable}
                            marginTop       = {20}
                            borderRadius    = {3}
                            width           = '80%'
                            height          = {40}
                            alignItems      = 'center'
                            justifyContent  = 'center'
                            backgroundColor = {this.state.btnBackGround}
                            onPress         = {e => this.onPress(e)}
                            
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