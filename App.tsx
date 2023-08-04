import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Child from './Child';
import { Button, Keyboard, KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
                    <Child />
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'blue',
                            height: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '90%',
                            alignSelf: 'center',
                            borderRadius: 10
                        }}>
                        <Text style={{ color: 'white', fontSize: 18, fontStyle: 'italic' }}>Button</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </NavigationContainer>
    );
};