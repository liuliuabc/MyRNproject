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
    Text, View, WebView,TouchableHighlight,Navigator,Clipboard,ToastAndroid
} from 'react-native';


export default class MyFirstRNProject extends Component {

    async _setClipboardContent(){
        Clipboard.setString('Hello World');
        try {
            var content = await Clipboard.getString();
            ToastAndroid.show('粘贴板的内容为:'+content,ToastAndroid.SHORT);
        } catch (e) {
            ToastAndroid.show(e.message,ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    ClipBoard粘贴板演示setSting,getString方法
                </Text>
                <Text onPress={this._setClipboardContent} style={{color: 'blue',marginLeft:10}}>
                    点击我把'Hello World'信息添加到粘贴板,并且弹出来内容.
                </Text>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft:10,
        margin: 10,
    },
});

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
