import * as React from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Tab1() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TextInput
                placeholder='Tab1 PlaceHolder'
                placeholderTextColor={'black'}
                style={{ height: 50, width: 300, backgroundColor: 'yellow', textAlign: 'center' }}
            />
        </View>
    );
};

function Tab2() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TextInput
                placeholder='Tab2 PlaceHolder'
                placeholderTextColor={'black'}
                style={{ height: 50, width: 300, backgroundColor: 'yellow', textAlign: 'center' }}
            />
        </View>
    );
};

function Tab3() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TextInput
                placeholder='Tab3 PlaceHolder'
                placeholderTextColor={'black'}
                style={{ height: 50, width: 300, backgroundColor: 'yellow', textAlign: 'center' }}
            />
        </View>
    );
};

function Tab4() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TextInput
                placeholder='Tab4 PlaceHolder'
                placeholderTextColor={'black'}
                style={{ height: 50, width: 300, backgroundColor: 'yellow', textAlign: 'center' }}
            />
        </View>
    );
};

const Tab = createMaterialTopTabNavigator();

export default function Child() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={Tab1} />
            <Tab.Screen name="Tab2" component={Tab2} />
            <Tab.Screen name="Tab3" component={Tab3} />
            <Tab.Screen name="Tab4" component={Tab4} />
        </Tab.Navigator>
    );
};