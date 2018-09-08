import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView, Image, TextInput, TouchableOpacity, Picker, AsyncStorage } from 'react-native';
import { Icon, Button, Tab, Tabs } from 'native-base';
import ProfileNavBar from './ProfileNavBar';
import StoryCard from './StoryCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';


class Profile extends Component {

    state = {
      
    }


    render(){
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
              <ProfileNavBar title='Profile' backFunc={() => this.props.navigation.goBack()}  goToEdit={() => this.props.navigation.navigate('EditProfile')} />
              
              <ScrollView style={{ paddingTop: 20 }}>

                <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                      <Image
                        style={{ width: 60, height: 60, borderRadius: 50, marginRight: 20 }}
                        source={require('../assets/avatar.png')}/>
                      <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#848484', fontSize: 17 }}>Anna Daniels</Text>
                        <Text style={{ color: '#aaaaaa' }}>Avid Writer</Text>
                      </View>
                  </View>

                  <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Icon
                      onPress={() => this.props.navigation.navigate('EditProfile')}
                      type='EvilIcons'
                      name='location'
                      style={{ color: '#cccccc', fontSize: 20, marginTop: 2, marginRight: 5 }} />
                    <Text style={{ color: '#aaaaaa', fontSize: 14 }}>Accra, Ghana</Text>
                  </View>

                  <View style={{ marginBottom: 30 }}>
                    <Text style={{ color: '#848484', fontSize: 15 }}>Some nice quote about myself and stuff I do you know</Text>
                  </View>
                </View>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#2DD7D9' }}>

                  <Tab
                    heading="My Stories"
                    tabStyle={{ backgroundColor: '#fff' }}
                    textStyle={{ color: '#aaaaaa' }}
                    activeTabStyle={{ backgroundColor: "#fff" }}
                    activeTextStyle={{ color: '#2DD7D9' }}>

                    <StoryCard navigate={() => this.props.navigation.navigate('ReadStory')} />

                  </Tab>

                  <Tab
                    heading="Saved Stories"
                    tabStyle={{ backgroundColor: '#fff' }}
                    textStyle={{ color: '#aaaaaa' }}
                    activeTabStyle={{ backgroundColor: "#fff" }}
                    activeTextStyle={{ color: '#2DD7D9' }}>

                    <StoryCard navigate={() => this.props.navigation.navigate('ReadStory')} />

                  </Tab>

                </Tabs>

                
                

              </ScrollView>

            </View>
            
        );
    }
}

export default Profile