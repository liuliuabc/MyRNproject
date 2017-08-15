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
    Text, View, WebView,TouchableHighlight,Navigator,Clipboard,ToastAndroid,DatePickerAndroid,console
} from 'react-native';


export default class MyFirstRNProject extends Component {

    async _showPicker(){
        try {

            const {action, year, month, day} = await DatePickerAndroid.open({
                // 对于当前的时间可以使用 `new Date()`
                // May 25 2020. Month 0 is January. 使用具体的时间创建一个Data对象
                minDate: new Date(2018, 4, 25),
                date:new Date(2019, 4, 25),
                maxDate: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                alert("你选择的时间："+year+"-"+month+":"+day);
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
            <View >
                <Text style={styles.welcome}>
                   日期选择器演示
                </Text>

                //alignself 可以将内容改变成包裹大小，去掉将会填充整个宽度
                <Text onPress={this._showPicker} style={{color: 'blue',marginLeft:10,backgroundColor: 'red',alignSelf:'flex-start'}}>
                    点击我弹出选择器
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
