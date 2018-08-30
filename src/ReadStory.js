import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, AsyncStorage } from 'react-native';
import BackNavBar from './BackNavBar';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class ReadStory extends Component {

    state = {
      loading: true,
      error: false,
      requestData: [],
      errorMessage: ''
    }

    

    render(){
        return (
            <View>
              <BackNavBar title='Story' />
              
              <ScrollView style={{ backgroundColor: '#f2f8ff' }}>


                
              </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  
});

export default ReadStory