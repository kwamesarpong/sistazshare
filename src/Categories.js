import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon, Button } from 'native-base';
import BackNavBar from './BackNavBar';


class Categories extends Component {

    state = {
      opacityHealth: 0.2,
      health: false
    }


    render(){
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
              <BackNavBar title='Categories' backFunc={() => this.props.navigation.goBack()} />
              
              <ScrollView style={{ padding: 20 }}>

                <Text style={{ marginBottom: 20, color: '#bbbbbb' }}>Tap to choose</Text>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                  <TouchableOpacity
                    style={{ width: '30%', backgroundColor: '#A4E3DA', borderColor: '#A4E3DA', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20, opacity: this.state.opacityHealth }}
                    onPress={() => this.setState({ opacityHealth: 1, health: !this.state.health })}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='stethoscope'
                      style={{ color: '#5AB1A4', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#5AB1A4' }}>Family</Text>
                  </TouchableOpacity>

                  <View style={{ width: '30%', backgroundColor: '#FDA88B', borderColor: '#FDA88B', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20, opacity: 0.4 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='account-heart'
                      style={{ color: '#E17A51', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#E17A51' }}>Health</Text>
                  </View>

                  <View style={{ width: '30%', backgroundColor: '#9EBEF1', borderColor: '#9EBEF1', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20, opacity: 0.4 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#6B8AC1', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#6B8AC1' }}>Love</Text>
                  </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                  <View style={{ width: '30%', backgroundColor: '#F69FD6', borderColor: '#F69FD6', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20, opacity: 0.4 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#D75EAA', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#D75EAA' }}>Secrets</Text>
                  </View>

                  <View style={{ width: '30%', backgroundColor: '#8786FB', borderColor: '#8786FB', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20, opacity: 0.4 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#5250DC', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#5250DC' }}>School</Text>
                  </View>

                  <View style={{ width: '30%', backgroundColor: '#F88C8C', borderColor: '#F88C8C', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20, opacity: 0.4 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#DB5F5F', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#DB5F5F' }}>Work</Text>
                  </View>

                </View>

                {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                  <View style={{ width: '30%', backgroundColor: '#8CDCF7', borderColor: '#8CDCF7', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#4AA4C6', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#4AA4C6' }}>Relationship</Text>
                  </View>

                  <View style={{ width: '30%', backgroundColor: '#BCA1F2', borderColor: '#BCA1F2', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#8761D7', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#8761D7' }}>Relationship</Text>
                  </View>

                  <View style={{ width: '30%', backgroundColor: '#8CD5CA', borderColor: '#8CD5CA', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#41AA99', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#41AA99' }}>Relationship</Text>
                  </View>

                </View> */}


              </ScrollView>

            </View>
            
        );
    }
}

export default Categories