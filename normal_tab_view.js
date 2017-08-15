//require('./src/app')   navigator实例

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component}  from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View, KeyboardAvoidingView,TextInput
} from 'react-native';

import ScrollableTabView ,{DefaultTabBar} from "react-native-scrollable-tab-view";

class MyFirstRNProject extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar/>}
                tabBarUnderlineColor='#f00'
                tabBarBackgroundColor='#fff'
                tabBarActiveTextColor='#f00'
                tabBarInactiveTextColor='#000'
                tabBarTextStyle={{fontSize: 17}}>
                <Text tabLabel='Tab1'/>
                <Text tabLabel='Tab2'/>
                <Text tabLabel='Tab3'/>
                <Text tabLabel='Tab4'/>
                <Text tabLabel='Tab5'/>
                <Text tabLabel='Tab6'/>
            </ScrollableTabView>
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
