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
    View, Image, TextInput, ProgressBarAndroid,DrawerLayoutAndroid,ScrollView
} from 'react-native';

export default class MyFirstRNProject extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {text: '默认值'};


    }


    render() {



        return (
            <View style={{height:400,justifyContent:'center',alignItems:'center',backgroundColor:'#00ffff'}}>

             <ScrollView   showsVerticalScrollIndicator={true} contentContainerStyle={{margin:10,backgroundColor:'#ff0000'}}>
<Text style={{fontSize:20,color:'white',backgroundColor:'#00ff00',margin:10}}>

    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu
    Shake or press menu button for dev menuShake or press menu button for dev menu





</Text>




             </ScrollView>



            </View>



        );
    }
}

var styles = StyleSheet.create({

    styleimg: {
        alignSelf: 'center',
        marginTop: 40,
        height: 70,
        width: 70,


    },
    styleinput_user: {
        backgroundColor: '#ffffff',
        height: 35,
        marginTop: 10,


    },
    styleinput_pass: {
        backgroundColor: '#ffffff',
        height: 35,


    },
    styleinput_login: {
        backgroundColor: '#63B8FF',
        height: 40,
        marginTop: 15,

        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'


    }


});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
