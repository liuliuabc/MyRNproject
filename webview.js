/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View, WebView
} from 'react-native';
const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>HTML字符串</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>加载静态的HTML文本信息</h1>
  </body>
</html>
`;






export default class MyFirstRNProject extends Component {

// 构造
    constructor(props) {
        super(props);
        // 初始状态

        this.state = { url:"http://www.baidu.com"
            };

    }






    render() {


        return (
            <View style={{flex:1}}>

              <Text style={{color:'blue',fontSize:20,height:50}}>webview实例</Text>

{/*
                <WebView domStorageEnabled={true}    html={HTML}  javaScriptEnabled={true} startInLoadingState={true}></WebView>
*/}

{/*
                <WebView domStorageEnabled={true}    url={this.state.url}  javaScriptEnabled={true} startInLoadingState={true}></WebView>
*/}
                <WebView domStorageEnabled={true}    source={require('./myhtml.html')}  javaScriptEnabled={true} startInLoadingState={true}></WebView>

            </View>

        );
    }
}



AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
