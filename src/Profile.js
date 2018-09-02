import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView, Image, TextInput, TouchableOpacity, Picker, AsyncStorage } from 'react-native';
import { Icon, Button } from 'native-base';
import BackNavBar from './BackNavBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';


class Profile extends Component {

    state = {
      
    }


    render(){
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
              <BackNavBar title='Profile' backFunc={() => this.props.navigation.goBack()} />
              
              <ScrollView style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: '80%', alignItems: 'center' }}></View>
                  <View style={{ width: '20%' }}>
                    <Button
                        transparent>
                        <Icon
                          onPress={() => this.props.navigation.navigate('EditProfile')}
                          type='FontAwesome'
                          name='pencil-square-o'
                          style={{ color: '#848484', fontSize: 25 }} />
                    </Button>
                  </View>
                </View>
                
                <View style={{ width: '100%', alignItems: 'center', marginBottom: 30 }}>
                  <Image
                    style={{ width: 80, height: 80, borderRadius: 50 }}
                    source={require('../assets/avatar.png')}/>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                  <View style={{ width: '50%', paddingLeft: 20 }}>
                    <Text style={{ color: '#b3b3b3' }}>First Name</Text>
                  </View>
                  <View style={{ width: '50%', alignItems: 'flex-end', paddingRight: 20 }}>
                    <Text style={{ color: '#848484' }}>Anna</Text>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                  <View style={{ width: '50%', paddingLeft: 20 }}>
                    <Text style={{ color: '#b3b3b3' }}>Last Name</Text>
                  </View>
                  <View style={{ width: '50%', alignItems: 'flex-end', paddingRight: 20 }}>
                    <Text style={{ color: '#848484' }}>Daniels</Text>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                  <View style={{ width: '50%', paddingLeft: 20 }}>
                    <Text style={{ color: '#b3b3b3' }}>Location</Text>
                  </View>
                  <View style={{ width: '50%', alignItems: 'flex-end', paddingRight: 20 }}>
                    <Text style={{ color: '#848484' }}>Accra</Text>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                  <View style={{ width: '50%', paddingLeft: 20 }}>
                    <Text style={{ color: '#b3b3b3' }}>Date of Birth</Text>
                  </View>
                  <View style={{ width: '50%', alignItems: 'flex-end', paddingRight: 20 }}>
                    <Text style={{ color: '#848484' }}>01 Jan 1995</Text>
                  </View>
                </View>
                

              </ScrollView>

            </View>
            
        );
    }
}

export default Profile