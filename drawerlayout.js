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
    View, Image, TextInput, ProgressBarAndroid,DrawerLayoutAndroid
} from 'react-native';

export default class MyFirstRNProject extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {text: '默认值'};


    }


    render() {

        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#ff0'}} >
                <Text style={{margin: 10, fontSize: 20, textAlign: 'center'}}>侧边菜单</Text>
                <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>功能一</Text>

                <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>功能二</Text>


            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                 renderNavigationView={()=>navigationView}
                 keyboardDismissMode={'on-drag'}
                 onDrawerClose={alert("close")}
                 onDrawerOpen={alert("open")}
                onDrawerSlide={alert("slide")}
                onDrawerStateChanged={(text)=>alert(text)}
            >
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
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
