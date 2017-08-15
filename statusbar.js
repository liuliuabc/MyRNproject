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
    Text, View, StatusBar
} from 'react-native';


export default class MyFirstRNProject extends Component {


    render() {
        return (
            <View style={{flex:1,backgroundColor:'#24ea12'}}>
                <StatusBar
                    hidden={true}
                    translucent={true}  backgroundColor={'red'} animated={true}



                ></StatusBar>

            </View>


        );
    }
}

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
