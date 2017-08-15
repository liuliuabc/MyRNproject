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
    Text, View, StatusBar,TouchableHighlight, Alert,ToastAndroid,AppState,NetInfo,Dimensions
} from 'react-native';

class MyFirstRNProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    屏幕信息如下:
                </Text>
                <Text style={styles.instructions}>
                    当前屏幕宽度:+{Dimensions.get('window').width};
                </Text>
                <Text style={styles.instructions}>
                    当前屏幕高度:'+{Dimensions.get('window').height};
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
