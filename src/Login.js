import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, TouchableOpacity, AsyncStorage, StatusBar } from 'react-native';
import { Icon, Button } from 'native-base';


class Login extends Component {

    render(){
        return (
            <View style={{ alignItems: 'center', backgroundColor: '#fff', padding: 40, height: '100%' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ backgroundColor: '#2DD7D9', paddingBottom: 15, paddingTop: 15, paddingLeft: 50, paddingRight: 50, borderRadius: 5 }}>
                <Text style={{ color: '#fff' }}>Login with Facebook</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

export default Login