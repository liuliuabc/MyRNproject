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
    View, ScrollView,TouchableOpacity
} from 'react-native';

export default class MyFirstRNProject extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {text: '默认值'};


    }
    makeItems(nItems, styles) {
        var items = [];
        for (var i = 0; i < nItems; i++) {
            items[i] = (
                <TouchableOpacity key={i} style={styles}>
                    <Text>{'Item ' + i}</Text>
                </TouchableOpacity>
            );
        }
        return items;
    };

    render() {
 var items=this.makeItems(20,styles.itemWrapper);
        items[4]=(<ScrollView horizontal={true} key="otherscroll">

            {this.makeItems(20,[styles.horizontalItemWrapper,styles.itemWrapper])}

        </ScrollView>);


        return (

             <ScrollView  showsVerticalScrollIndicator={true} contentContainerStyle={{margin:10,backgroundColor:'#ff0000'}}>
                 {items}


             </ScrollView>






        );
    }
}

var styles = StyleSheet.create({
    verticalScrollView: {
        margin: 10,
    },
    itemWrapper: {
        backgroundColor: '#dddddd',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#a52a2a',
        padding: 30,
        margin: 5,
    },
    horizontalItemWrapper: {
        padding: 50
    }
});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
