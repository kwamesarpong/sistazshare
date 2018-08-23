import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Sidebar extends React.Component {

    render(){
        return (
            <View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f4f4', height: '90%' }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f4f4', paddingTop: 30, paddingBottom: 30, paddingLeft: 30 }}>
                        <Text style={{ color: '#737373' }}>Kay Sarp</Text>
                        <Text style={{ color: '#b3b3b3', fontSize: 15, paddingTop: 5 }}>Software Developer</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => Actions.home()}
                        style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                        activeOpacity={0.6}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ width: '25%'}}>
                                <Icon name='md-sync' style={{color: '#737373', paddingLeft:30}} />
                            </View>
                            <View style={{ width: '75%'}}>
                                <Text style={{ color: '#737373', paddingTop: 5 }}>Requests</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Actions.facilities()}
                        style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                        activeOpacity={0.6}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ width: '25%'}}>
                                <Icon name='md-home' style={{color: '#737373', paddingLeft:30}} />
                            </View>
                            <View style={{ width: '75%'}}>
                                <Text style={{ color: '#737373', paddingTop: 5 }}>Facilities</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Actions.teammember()}
                        style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                        activeOpacity={0.6}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ width: '25%'}}>
                                <Icon name='md-person' style={{color: '#737373', paddingLeft:30}} />
                            </View>
                            <View style={{ width: '75%'}}>
                                <Text style={{ color: '#737373', paddingTop: 5 }}>Team Members</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Actions.account()}
                        style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                        activeOpacity={0.6}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ width: '25%'}}>
                                <Icon name='md-settings' style={{color: '#737373', paddingLeft:30}} />
                            </View>
                            <View style={{ width: '75%'}}>
                                <Text style={{ color: '#737373', paddingTop: 5 }}>Account Settings</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#0176ff', height: '10%', paddingTop: 20 }} activeOpacity={0.9}>
                    <Text style={{color: '#fff'}}>Log out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}