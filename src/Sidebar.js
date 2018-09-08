import React from 'react';
import { NavigationActions } from 'react-navigation';
import { View, TouchableOpacity, Image } from 'react-native';
import { Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { DrawerActions } from 'react-navigation';

export default class Sidebar extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
      }

    render(){
        return (
            <View>
                <View style={{ backgroundColor: '#2DD7D9', borderBottomWidth: 1, borderBottomColor: '#f4f4f4', paddingTop: 30, paddingBottom: 30, paddingLeft: 30 }}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 50, marginBottom: 10 }}
                        source={require('../assets/avatar.png')}/>
                    <Text style={{ color: '#fff' }}>Anna Daniels</Text>
                    <Text style={{ color: '#fff', fontSize: 15, paddingTop: 5 }}>Avid Writer</Text>
                </View>

                <TouchableOpacity
                    onPress={this.navigateToScreen('Home')}
                    style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                    activeOpacity={0.6}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{ width: '25%'}}>
                            <Icon name='ios-home' style={{color: '#2DD7D9', paddingLeft:30}} />
                        </View>
                        <View style={{ width: '75%'}}>
                            <Text style={{ color: '#2DD7D9', paddingTop: 5 }}>Home</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.navigateToScreen('Profile')}
                    style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                    activeOpacity={0.6}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{ width: '25%'}}>
                            <Icon name='md-person' style={{color: '#2DD7D9', paddingLeft:30}} />
                        </View>
                        <View style={{ width: '75%'}}>
                            <Text style={{ color: '#2DD7D9', paddingTop: 5 }}>Profile</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.navigateToScreen('Categories')}
                    style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                    activeOpacity={0.6}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{ width: '25%'}}>
                            <Icon name='ios-list-box' style={{color: '#2DD7D9', paddingLeft:30}} />
                        </View>
                        <View style={{ width: '75%'}}>
                            <Text style={{ color: '#2DD7D9', paddingTop: 5 }}>Categories</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Actions.account()}
                    style={{flexDirection:'row', alignItems:'center', paddingTop:20}}
                    activeOpacity={0.6}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{ width: '25%'}}>
                            <Icon name='ios-settings' style={{color: '#2DD7D9', paddingLeft:30}} />
                        </View>
                        <View style={{ width: '75%'}}>
                            <Text style={{ color: '#2DD7D9', paddingTop: 5 }}>Settings</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}