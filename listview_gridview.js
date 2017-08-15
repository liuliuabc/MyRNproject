/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View, ListView,TouchableOpacity,Image,TouchableHighlight
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
        for (var i = 0; i < 12; i++) {
            items[i] = '单元格' + i;

        }
        ;


        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {datesource: ds.cloneWithRows(items)};

    }


    getRowView(rowdata, selectionId, rowID) {
        var imagurl = THUMB_URLS[rowID%12];
        return (

            <TouchableHighlight underlayColor="red" onPress={()=>console.log("aa")} style={{height:90}}>


                    <View style={{

                        justifyContent: 'center',

                        backgroundColor: '#F6F6F6',
                        alignItems:'center',
                        padding: 5,
                        margin: 3,
                        width: 85,
                        height: 85,
                        borderRadius:5,
                        borderColor:'#ccc',
                        borderWidth:1

                    }}>
                        <Image style={{width: 45, height: 45,}} source={imagurl}/>
                        <Text style={{ fontSize: 18, color: 'blue'}}>
                            {rowdata }
                        </Text>
                    </View>



            </TouchableHighlight>







        )


    }

    render() {


        return (
            <ListView
                initialListSize={12}
                contentContainerStyle={{flexDirection:'row',justifyContent:'space-around', flexWrap:'wrap'}}

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
