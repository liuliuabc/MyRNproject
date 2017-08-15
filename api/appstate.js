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
    Text, View, StatusBar,TouchableHighlight, Alert,ToastAndroid,AppState
} from 'react-native';

class MyFirstRNProject extends  Component{

    constructor(props){
        super(props);
        this._handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            _appState:AppState.currentState,
            _changeMessage:'',

        };
    }
    componentWillMount() {
        //ToastAndroid.show('挂载',ToastAndroid.SHORT);
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    componentWillUnmount() {
        //ToastAndroid.show('取消挂载',ToastAndroid.SHORT);
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
    handleAppStateChange(appState) {
        ToastAndroid.show('当前状态为:'+appState,ToastAndroid.SHORT);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>当前App状态信息如下:</Text>
                <Text>
                    {this.state._appState}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
