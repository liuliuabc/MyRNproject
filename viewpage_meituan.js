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
    View, ScrollView, ToolbarAndroid, SwitchAndroid, Picker, ViewPagerAndroid, Image
} from 'react-native';

export default class MyFirstRNProject extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {page: 0};


    }

    onPageSelected(e) {
        this.setState({page: e.nativeEvent.position})

    }

    myfun() {
        return "租房";
    };

    render() {


        return (
            <View style={{marginTop: 50}}>
                <ViewPagerAndroid style={styles.pageStyle} initialPage={this.state.page}
                    // onPageScroll={(x,y)=>{alert(x+";"+y)}}

                    //  onPageScrollStateChanged={(text)=>alert(text)}
                                  onPageSelected={(e)=>this.onPageSelected(e)}>
                    <View style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/one.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/two.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/three.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/four.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/five.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>


                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/six.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/seven.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/eight.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/nine.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/ten.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>


                        </View>


                    </View>
                    <View style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/one.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/two.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/three.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/four.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/five.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>


                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/six.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/seven.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/eight.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/nine.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Image source={require('./img/ten.png')}
                                       style={{alignSelf: 'center', width: 45, height: 45}}></Image>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#555555',
                                    textAlign: 'center',
                                    marginTop: 5
                                }}>{this.myfun()}</Text>

                            </View>


                        </View>


                    </View>
                </ViewPagerAndroid>
                <Text style={{fontSize: 20, textAlign: 'center',}}>当前第{this.state.page}页</Text>
            </View>




        );
    }
}
const styles = StyleSheet.create({
    pageStyle: {


        height: 200,
    }
});

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
