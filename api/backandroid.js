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
    Text, View, StatusBar,TouchableHighlight, Alert,ToastAndroid,BackAndroid
} from 'react-native';

var count=2;
class MyFirstRNProject extends Component {
    //组件挂载的时候调用
    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress',function(){
            if(count>=1){
                ToastAndroid.show('收到点击返回键信息...'+count,ToastAndroid.SHORT);
                count--;
                return true;
            }else{
                return false;
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    BackAndroid模块使用实例
                </Text>
                <Text style={styles.instructions}>
                    请点击返回键查看效果...
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
