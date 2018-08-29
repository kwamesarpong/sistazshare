import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Container, View, Button, Icon, Fab } from 'native-base';
import NavBar from './NavBar';
import StoryCard from './StoryCard';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class Home extends Component {

    state = {
      active: true,
      loading: true,
      error: false,
      requestData: []
    }

    async componentDidMount() {
      const url = 'https://joluud-canary-build.space/api/requests';

      await axios.get(url, {
          
        }
      )
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
          error: false,
          // requestData: response
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true
        });
      });
    }

    

    render(){
        return (
          <View style={{ flex: 1 }}>
            <NavBar title='Home' />
            
            <ScrollView>
              <StoryCard />
              <StoryCard />
              <StoryCard />
              <StoryCard />
              <StoryCard />
              <StoryCard />
              <StoryCard />
              <StoryCard />
              
            </ScrollView>

            <View>
              <Fab
                containerStyle={{ }}
                style={{ backgroundColor: '#2DD7D9' }}
                position="bottomRight"
                onPress={() => console.log("Hi")}>
                <Icon name="md-add" />
              </Fab>
            </View>

          </View>
            
        );
    }
}

const styles = StyleSheet.create({
  headingView: {
    marginTop: 20,
    marginBottom: 20
  }
});

export default Home