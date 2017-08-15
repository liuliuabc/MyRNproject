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
    View, ScrollView,ToolbarAndroid,SwitchAndroid,Picker
} from 'react-native';

export default class MyFirstRNProject extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {firstIson:true,secondIson:false,language:'js'};


    }


    render() {



        return (

            <View  style={{alignItems:'center'}} >
                <Picker
                    style={{width:200}}
                    selectedValue={this.state.language}
                    enabled={true}
                    mode={'dialog'}
                    prompt={'请选择语言'}


                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" style={{color:'red'}}/>
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="c++" value="cadd"></Picker.Item>
                </Picker>

                <SwitchAndroid disabled={true} value={this.state.firstIson} onValueChange={(value)=>this.setState({firstIson:value})}></SwitchAndroid>
                <SwitchAndroid disabled={true} value={this.state.secondIson}  onValueChange={(value)=>this.setState({secondIson:value}) }></SwitchAndroid>
            </View>






        );
    }
}


AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
