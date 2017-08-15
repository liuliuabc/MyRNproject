/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View, TouchableWithoutFeedback,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback
} from 'react-native';

export default class MyFirstRNProject extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {page:0};


    }



    render() {



        return (
            <View style={styles.container}>




                <TouchableOpacity style={{ borderRadius: 8,padding: 6,marginTop:5,backgroundColor:'green'}} activeOpacity={0.5}>
                    <Text style={{fontSize:16}}>点击改变透明度</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onLongPress={()=>alert("longpress")}
                                          delayLongPress={5000}
                                          onPressIn={()=>alert("pressin")}
                                          onPressOut={()=>alert("pressout")}



                >
                   <Text style={{height:50,width:150,backgroundColor:'#3f5d56'}}>按钮</Text>

                </TouchableWithoutFeedback>
                <TouchableHighlight
                    underlayColor='red'
                    activeOpacity={0.5}
                    onPress={()=>console.log("不实现onpress没效果")}
                    onShowUnderlay={()=>alert("youxiao")}
                    style={{ borderRadius: 8,padding: 6,marginTop:5,backgroundColor:'green'}}
                >
                    <Text style={{fontSize:16}}>点击我</Text>
                </TouchableHighlight>

                <TouchableNativeFeedback style={{marginTop:20}}>
                    <View style={{ borderRadius: 8,padding: 6,marginTop:5,backgroundColor:'green'}}>
                        <Text style={{margin:10}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback style={{marginTop:20}}
                                         background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100,}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback style={{marginTop:20}}
                                         background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
                    <View style={{width: 150, height: 100,}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback style={{marginTop:20}}
                                         background={TouchableNativeFeedback.Ripple('red',false)}>
                    <View style={{width: 150, height: 100,}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

{/*后面两个Api>=21*/}

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
