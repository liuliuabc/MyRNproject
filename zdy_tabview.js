import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import WeixinTabBar from './zdy_tabbar_item';

class MyFirstRNProject extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabNames: ['Tab1', 'Tab2', 'Tab3', 'Tab4'],
            tabIconNames: ['md-pie', 'md-open', 'md-power', 'md-plane'],
        };
    }
    //在android／app／build.gradle添加  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"




    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={() => <WeixinTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>

                <View style={styles.content} tabLabel='key1'>
                    <Text>#1</Text>
                </View>

                <View style={styles.content} tabLabel='key2'>
                    <Text>#2</Text>
                </View>

                <View style={styles.content} tabLabel='key3'>
                    <Text>#3</Text>
                </View>

                <View style={styles.content} tabLabel='key4'>
                    <Text>#4</Text>
                </View>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        flex: 1
    }
});

AppRegistry.registerComponent('MyFirstRNProject', () => MyFirstRNProject);
