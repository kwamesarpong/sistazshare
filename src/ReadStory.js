import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, Image, TextInput, AsyncStorage } from 'react-native';
import { Icon, Button, ActionSheet } from 'native-base';
import BackNavBar from './BackNavBar';
import CommentCard from './CommentCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

var BUTTONS = ["Keep", "Report", "Cancel"];
var CANCEL_INDEX = 2;
class ReadStory extends Component {

    state = {
      loading: true,
      error: false,
      requestData: [],
      indexClicked: '',
      comment: '',
      errorMessage: ''
    }


    render(){
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
              <BackNavBar title='Story' backFunc={() => this.props.navigation.goBack()} />
              
              <ScrollView>

                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, marginBottom: 20 }}>
                    <View style={{ paddingTop: 20, width: '25%' }}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 50 }}
                        source={require('../assets/avatar.png')}/>
                    </View>
                    <View style={{ paddingTop: 30, width: '60%' }}>
                    <Text style={{ color: '#555555', fontSize: 16 }}>Anna Daniels</Text>
                    <Text style={{ color: '#b3b3b3', fontSize: 13 }}>Health · A few seconds ago</Text>
                    </View>
                    <View style={{ paddingTop: 30, width: '15%' }}>
                    <Button
                        transparent
                        onPress={() =>
                        ActionSheet.show(
                            {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            },
                            buttonIndex => {
                            this.setState({ indexClicked: BUTTONS[buttonIndex] });
                            }
                        )}>
                        <Icon
                        name='md-more'
                        style={{ color: '#848484' }} />
                    </Button>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ color: '#000000', marginBottom: 5 }}>My Secret Fantasies</Text>
                        <Text style={{ color: '#848484' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system.</Text>
                        <Text style={{ color: '#848484' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system.</Text>
                        <Text style={{ color: '#848484' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system.</Text>
                        <Text style={{ color: '#848484' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system.</Text>
                        <Text style={{ color: '#848484' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system.</Text>
                        <Text style={{ color: '#848484' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system.</Text>
                    </View>
                </View>
                
                <View style={{ paddingLeft: 20, paddingRight: 20, borderBottomColor: '#f4f4f4', borderBottomWidth: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20, borderTopColor: '#f4f4f4', borderTopWidth: 1, paddingTop: 10 }}>
                        <View style={{ alignItems: 'center', width: '30%', flexDirection: 'row' }}>
                            <Icon
                            name='comment'
                            style={{ color: '#848484', fontSize: 20 }}
                            type='EvilIcons' />
                            <Text style={{ color: '#848484', fontSize: 13 }}>3 Snaps</Text>
                        </View>
                        <View style={{ alignItems: 'center', width: '40%', flexDirection: 'row' }}>
                            <Icon
                            name='comment'
                            style={{ color: '#848484', fontSize: 20 }}
                            type='EvilIcons' />
                            <Text style={{ color: '#848484', fontSize: 13 }}>10 comments</Text>
                        </View>
                        <View style={{ alignItems: 'center', width: '30%', flexDirection: 'row' }}>
                            <Icon
                            name='share-google'
                            style={{ color: '#848484', fontSize: 20 }}
                            type='EvilIcons' />
                            <Text style={{ color: '#848484', fontSize: 13 }}>Share</Text>
                        </View>
                    </View>
                </View>

                <CommentCard />
                <CommentCard />

              </ScrollView>
            
             
                <View style={{ flexDirection: 'row', borderTopColor: '#dddddd', borderTopWidth: 1, paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
                    <View style={{ width: '80%' }}>
                        <KeyboardAwareScrollView>
                            <TextInput 
                                placeholder='Comment on Story'
                                placeholderTextColor='#848484'
                                selectionColor='#2DD7D9'
                                multiline = {true}
                                onChangeText={(comment) => this.setState({ comment })}
                                underlineColorAndroid='#2DD7D9' />
                        </KeyboardAwareScrollView>
                    </View>
                    <View style={{ width: '20%', alignItems: 'flex-end', paddingTop: 15 }}>
                        <Icon
                            name='md-send'
                            style={{ color: '#2DD7D9', fontSize: 30 }} />
                    </View>
                </View>

            </View>
            
        );
    }
}

export default ReadStory