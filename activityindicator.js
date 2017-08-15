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
    Text, View, StatusBar,TouchableHighlight, Alert,ToastAndroid,BackAndroid,PixelRatio, ActivityIndicator
} from 'react-native';

class MyFirstRNProject extends Component {
    render() {
        return (
            <View style={styles.container}>

                <ActivityIndicator
                    animating={true}
                    style={{height: 80}}
                    size="large"
                />
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
