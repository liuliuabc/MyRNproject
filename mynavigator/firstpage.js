/**
 * Created by yanghong.liu on 16/10/21.
 */

import  React, {Component} from "react";
import {
    AppRegistry,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Navigator,
    View,
    Text
} from 'react-native';

import  SecondPage from './secondpage';

class FirstPage extends  Component{

    _back(){
        this.props.navigator.pop();
    }

    _next(){
        this.props.navigator.push({
            component:SecondPage,
            msg:"第二个页面",
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom


        });
    }



  render(){


    return (
  <View style={{flex:1,backgroundColor:'#aa56b1',flexDirection:'row'}}>
    <TouchableOpacity onPress={this._back.bind(this)}>

        <Text style={{color:'red'}}>上一页</Text>




    </TouchableOpacity>

    <TouchableOpacity onPress={this._next.bind(this)}>

        <Text style={{color:'blue',marginLeft:100,marginRight:50}}>下一页</Text>

    </TouchableOpacity>


    <Text>第一页:{this.props.message}</Text>



</View>



        )






}

}
export  default  FirstPage;