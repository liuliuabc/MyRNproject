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
    View, Image
} from 'react-native';

export default class MyFirstRNProject extends Component {





    render() {
   var  myfun=function () {
       return "租房";
   };
       

        return (
            <View style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column',flex:1}}>
                      <Image source={require('./img/one.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                      <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/two.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/three.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/four.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/five.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>



                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/six.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/seven.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/eight.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/nine.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Image source={require('./img/ten.png')} style={{alignSelf:'center',width:45,height:45}}></Image>
                        <Text style={{fontSize:11,color:'#555555',textAlign:'center', marginTop:5}}>{myfun()}</Text>

                    </View>



                </View>


            </View>
        );
    }
}

var styles = StyleSheet.create({

    mystyleone: {
        color: 'red',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 70,
        width: 700,
        letterSpacing: 70,
        lineHeight: 100,
        textShadowOffset: {width: 10, height: 10},
        textShadowColor: 'blue',
        textShadowRadius: 2,
        textDecorationLine: 'line-through',
        textDecorationColor: 'blue',
        textDecorationStyle: 'dashed',
        fontStyle: 'italic'


    },
    mystyletwo: {
        color: 'blue',

    }


});
AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
