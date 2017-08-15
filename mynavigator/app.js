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
    Text, View, WebView,TouchableHighlight,Navigator
} from 'react-native';
import FirstPage from './mynavigator/firstpage'
//const defaultRoute={component:FirstPage}

export default class MyFirstRNProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component:FirstPage,msg:'默认消息'}}
                renderScene={(route,navigator)=>{let Component=route.component;return (<Component message={route.msg} navigator={navigator}/>)}}

                configureScene={(route)=>{

                    if(route.sceneConfig){
                        return route.sceneConfig;
                    }else{
                        return Navigator.SceneConfigs.FloatFromRight;
                    }


                }}
            >


            </Navigator>

        );
    }
}


AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
