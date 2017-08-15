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
    View, ScrollView,ToolbarAndroid,SwitchAndroid
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

            <ToolbarAndroid
                actions={toolbarActions}
                navIcon={require('./img/one.png')}
                style={styles.toolbar}
                subtitle="副标题"
                subtitleColor={'green'}
             logo={require('./img/four.png')}



                title="主标题">


                <SwitchAndroid value={true}></SwitchAndroid>

            </ToolbarAndroid>






        );
    }
}

var toolbarActions = [
    {title: 'Create', icon: require('./img/two.png'), show: 'always',showWithText:true},
    {title: 'Filter'},
    {title: 'Settings', icon: require('./img/six.png'), show: 'ifRom'},
];
const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#f9ff90',
        height: 56,
    },
});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
