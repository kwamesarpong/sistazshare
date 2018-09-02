import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView, Image, TextInput, TouchableOpacity, Picker, AsyncStorage } from 'react-native';
import { Icon, Button, CheckBox } from 'native-base';
import BackNavBar from './BackNavBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';


class WriteStory extends Component {

    state = {
      loading: true,
      error: false,
      requestData: [],
      errorMessage: '',
      anon: true,
      category: '',
      title: '',
      story: ''
    }

    toggleAnon = () => {
      this.setState({ anon: !this.state.anon });
    }


    render(){
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
              <BackNavBar title='Share' backFunc={() => this.props.navigation.goBack()} />
              
              <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>

                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 10, borderBottomColor: '#f4f4f4', borderBottomWidth: 1 }}>
                    <View style={{ width: '70%', alignItems: 'center' }}>
                      <Text style={{ color: '#848484' }}>Share Anonymously</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                      <CheckBox checked={this.state.anon} color='#2DD7D9' onPress={this.toggleAnon} />
                    </View>
                </View>

                <View style={{ marginBottom: 30, borderBottomColor: '#f4f4f4', borderBottomWidth: 1 }}>
                  <Picker
                    selectedValue={this.state.category}
                    style={{ borderColor: '#d8d8d8', borderRadius: 5, borderWidth: 1, color: '#737373', height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ category: itemValue })}>
                    <Picker.Item label='Select Category' value='' />
                    <Picker.Item label='Health' value='Health' />
                    <Picker.Item label='Relationship' value='Relationship' />
                    <Picker.Item label='Sex' value='Sex' />
                    <Picker.Item label='Family' value='Family' />
                  </Picker>
                </View>

                <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                  <Text style={{ color: '#848484' }}>Write your story</Text>
                </View>

                <View style={{ width: '100%', marginBottom: 10 }}>
                    <KeyboardAwareScrollView>
                        <TextInput 
                          placeholder='Title'
                          placeholderTextColor='#848484'
                          selectionColor='#2DD7D9'
                          multiline = {true}
                          maxLength={30}
                          onChangeText={(title) => this.setState({ title })}
                          underlineColorAndroid='#2DD7D9' />
                    </KeyboardAwareScrollView>
                </View>

                <View style={{ width: '100%', marginBottom: 40 }}>
                    <KeyboardAwareScrollView>
                        <TextInput 
                          placeholder='Story'
                          placeholderTextColor='#848484'
                          selectionColor='#2DD7D9'
                          multiline = {true}
                          maxLength={1500}
                          onChangeText={(story) => this.setState({ story })}
                          underlineColorAndroid='#2DD7D9' />
                    </KeyboardAwareScrollView>
                    <Text style={{ color: '#b3b3b3', fontSize: 12, alignSelf: 'flex-end' }}>{this.state.story.length} / 1500</Text>
                </View>

                <View style={{ width: '100%', alignItems: 'center', marginBottom: 80 }}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{ backgroundColor: '#2DD7D9', borderRadius: 5, paddingTop: 15, paddingBottom: 15, paddingLeft: 50, paddingRight: 50 }}>
                      <Text style={{ color: '#fff' }}>Share</Text>
                    </TouchableOpacity>
                </View>
                

              </ScrollView>

            </View>
            
        );
    }
}

export default WriteStory