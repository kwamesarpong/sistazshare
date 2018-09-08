import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView, Image, TextInput, TouchableOpacity, Picker, AsyncStorage } from 'react-native';
import { Icon, Button } from 'native-base';
import BackNavBar from './BackNavBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';


class Settings extends Component {

    state = {
      
    }


    render(){
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
              <BackNavBar title='Settings' backFunc={() => this.props.navigation.goBack()} />
              
              <ScrollView style={{ backgroundColor: '#f6f6f6', height: '100%' }}>

                
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff' }}>
                  <View style={{ width: '80%' }}>
                    <Text style={{ color: '#b3b3b3' }}>FAQs</Text>
                  </View>
                  <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <Icon name='ios-arrow-forward' style={{color: '#b3b3b3'}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff' }}>
                  <View style={{ width: '80%' }}>
                    <Text style={{ color: '#b3b3b3' }}>Privacy Policy</Text>
                  </View>
                  <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <Icon name='ios-arrow-forward' style={{color: '#b3b3b3'}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff' }}>
                  <View style={{ width: '80%' }}>
                    <Text style={{ color: '#b3b3b3' }}>Contact Us</Text>
                  </View>
                  <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <Icon name='ios-arrow-forward' style={{color: '#b3b3b3'}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff', marginBottom: 40 }}>
                  <View style={{ width: '80%' }}>
                    <Text style={{ color: '#b3b3b3' }}>Invite a friend</Text>
                  </View>
                  <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <Icon name='ios-arrow-forward' style={{color: '#b3b3b3'}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, borderTopColor: '#f4f4f4', borderTopWidth: 1, paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff', marginBottom: 40 }}>
                  <View style={{ width: '80%' }}>
                    <Text style={{ color: '#b3b3b3' }}>About</Text>
                  </View>
                  <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <Icon name='ios-arrow-forward' style={{color: '#b3b3b3'}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, borderTopColor: '#f4f4f4', borderTopWidth: 1, paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff' }}>
                  <View style={{ width: '80%' }}>
                    <Text style={{ color: '#ff0000' }}>Sign Out</Text>
                  </View>
                  <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <Icon name='ios-arrow-forward' style={{color: '#b3b3b3'}} />
                  </View>
                </TouchableOpacity>
                

              </ScrollView>

            </View>
            
        );
    }
}

export default Settings