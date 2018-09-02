import React, { Component } from 'react';
import { ScrollView, Text, TextInput } from 'react-native';
import { View, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import StoryCard from './StoryCard';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class Search extends Component {

    state = {
      query: ''
    }
    

    render(){
        return (
          <View style={{ flex: 1, backgroundColor: '#fff', height: '100%' }}>
            <Header
              androidStatusBarColor='#417F7F'
              style={{ backgroundColor: '#2DD7D9' }}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='md-arrow-round-back' />
                </Button>
              </Left>
              <View style={{ alignItems: 'center', width: '60%' }}>
                <TextInput 
                  placeholder='Search'
                  placeholderTextColor='#f4f4f4'
                  selectionColor='#fff'
                  style={{ width: '100%', color: '#fff' }}
                  onChangeText={(query) => this.setState({ query })}
                  underlineColorAndroid='#fff' />
              </View>
              <Right>
                <Button
                  transparent
                  onPress={() => Actions.pop()}>
                  <Text style={{ color: '#fff' }}>Cancel</Text>
                </Button>
              </Right>
            </Header>
            
            <ScrollView>
              <StoryCard />
              <StoryCard />
              
            </ScrollView>

          </View>
            
        );
    }
}

export default Search