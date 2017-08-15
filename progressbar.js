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
    View, Image, TextInput, ProgressBarAndroid
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
            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                <ProgressBarAndroid color={'red'} styleAttr={'Inverse'} ></ProgressBarAndroid>
                <ProgressBarAndroid color={'red'} styleAttr={'Small'} ></ProgressBarAndroid>
                <ProgressBarAndroid color={'red'} styleAttr={'SmallInverse'} ></ProgressBarAndroid>

                <ProgressBarAndroid color={'red'} styleAttr={'Large'} ></ProgressBarAndroid>
                <ProgressBarAndroid color={'red'} styleAttr={'LargeInverse'} ></ProgressBarAndroid>



                <ProgressBarAndroid color={'green'} styleAttr={'Horizontal'} progress={0.5} indeterminate={false}></ProgressBarAndroid>
                <ProgressBarAndroid color={'blue'} styleAttr={'Horizontal'}  indeterminate={true}></ProgressBarAndroid>


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
