//require('./src/app')   navigator实例

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View, StatusBar,TouchableHighlight, Alert,ToastAndroid
} from 'react-native';

class MYCustomButton extends  Component{

    render(){

        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                style={styles.button} underlayColor={'red'}




            >
                <Text >{this.props.text}</Text>



            </TouchableHighlight>





                    )




                }



};









        export default class MyFirstRNProject extends Component {


    render() {
        return (
            <View style={{flex:1,backgroundColor:'#ae1233'}}>
        <MYCustomButton text='默认弹窗' onPress={()=>Alert.alert("温馨提示","确定取消吗")}/>
                <MYCustomButton text='默认弹窗' onPress={()=>Alert.alert(

                    "温馨提示","确定取消吗",[{text:'确定',onPress:()=>{
                        ToastAndroid.show("你选择了确定", ToastAndroid.SHORT)}},{text:'取消',onPress:()=>{
                        ToastAndroid.show("你选择了取消", ToastAndroid.SHORT)}}])}/>

                <MYCustomButton text='默认弹窗' onPress={()=>Alert.alert(

                    "温馨提示","确定取消吗",[{text:'one',onPress:()=>{
                        ToastAndroid.show("你选择了one", ToastAndroid.SHORT)}},{text:'two',onPress:()=>{
                        ToastAndroid.show("你选择了two", ToastAndroid.SHORT)}},{text:'three',onPress:()=>{
                        ToastAndroid.show("你选择了three", ToastAndroid.SHORT)}}])}/>

            </View>


        );
    }
}
   const styles = StyleSheet.create({
       button: {
       margin:5,
       backgroundColor: 'white',
       padding: 15,
       borderBottomWidth: StyleSheet.hairlineWidth,
       borderBottomColor: '#cdcdcd',
   }
   });

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
