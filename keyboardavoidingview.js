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
    Text, View, KeyboardAvoidingView,TextInput
} from 'react-native';

class MyFirstRNProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={80} >

                    <TextInput
                        placeholder="<TextInput />"
                         />
                </KeyboardAvoidingView>

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
        transform
    },

});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
