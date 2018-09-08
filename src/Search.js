import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { View, Header, Item, Input, Left, Body, Right, Button, Icon, Title } from 'native-base';
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
              style={{ backgroundColor: '#2DD7D9' }}
              searchBar
              rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
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