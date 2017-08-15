/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View, ListView,TouchableOpacity,Image
} from 'react-native';

var THUMB_URLS = [
    require('./img/one.png'),
    require('./img/two.png'),
    require('./img/three.png'),
    require('./img/four.png'),
    require('./img/five.png'),
    require('./img/six.png'),
    require('./img/seven.png'),
    require('./img/eight.png'),
    require('./img/nine.png'),
    require('./img/ten.png'),
    require('./img/next_eight.png'),
    require('./img/next_five.png'),
];

export default class MyFirstRNProject extends Component {

// 构造
    constructor(props) {
        super(props);
        // 初始状态

        var items = [];
        for (var i = 0; i < 11; i++) {
            items[i] = 'row' + i;

        }
        ;


        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {datesource: ds.cloneWithRows(items)};

    }


    getRowView(rowdata, selectionId, rowID) {
        var imagurl = THUMB_URLS[rowID];
        return (
            <TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: 10,
                        backgroundColor: '#F6F6F6',
                        alignItems:'center'
                    }}>
                        <Image style={{width: 50, height: 50,}} source={imagurl}/>
                        <Text style={{flex: 1, fontSize: 16, color: 'blue',marginLeft:20}}>
                            {rowdata + '我是测试行号哦~'}
                        </Text>
                    </View>



            </TouchableOpacity>







        )


    }

    render() {


        return (
            <ListView

                dataSource={this.state.datesource}
                renderRow={(rowdata, selectionId, rowID)=>this.getRowView(rowdata, selectionId, rowID)}
            >


            </ListView>


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
