/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image,TextInput
} from 'react-native';

export default class MyFirstRNProject extends Component {
// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {text:'默认值'};


  }


    render() {



        return (
            <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                 <Image source={require('./img/one.png')} style={styles.styleimg}></Image>
                 <TextInput placeholder={'QQ/邮箱/手机号'}
                            underlineColorAndroid={'transparent'}
                            textAlign='center'
                            numberOfLines={1}
                            autoFocus={true}
                            style={styles.styleinput_user}

                 ></TextInput>
                <View style={{backgroundColor:'#f4f4f4',height:1}}></View>
                <TextInput
                        placeholder={'密码'}
                           underlineColorAndroid={'transparent'}
                           textAlign='center'
                           numberOfLines={1}
                           autoFocus={true}
                        secureTextEntry={true}
                        style={styles.styleinput_pass}

                ></TextInput>
                <View style={styles.styleinput_login} >
                 <Text style={{fontSize:17,color:'white'}} >登陆</Text>

                </View>
               <View  style={{flex:1,flexDirection:'row',alignItems:'flex-end',marginBottom:10}} >

                    <Text style={{fontSize:13,color:'#63B8FF',marginLeft:15}}>无法登陆?</Text>
                   <Text style={{fontSize:13,color:'#63B8FF',marginRight:15,flex:1,textAlign:'right'}} >新用户</Text>

               </View>



            </View>

        );
    }
}

var styles = StyleSheet.create({

    styleimg: {
         alignSelf:'center',
        marginTop:40,
        height:70,
        width:70,


    },
    styleinput_user: {
        backgroundColor:'#ffffff',
        height:35,
        marginTop:10,



    },
    styleinput_pass: {
        backgroundColor:'#ffffff',
        height:35,




    },
    styleinput_login: {
        backgroundColor:'#63B8FF',
        height:40,
        marginTop:15,

        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'



    }


});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
