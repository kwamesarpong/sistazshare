import React, { Component } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { View, Icon, Fab } from 'native-base';
import NavBar from './NavBar';
import StoryCard from './StoryCard';
import axios from 'axios';


class Home extends Component {
    static navigationOptions = {
      header: null,
    };

    state = {
      active: true,
      loading: true,
      error: false,
      refreshing: false,
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

    _onRefresh = () => {
      this.setState({refreshing: true});
      console.log("Hi");
      this.setState({refreshing: false});
    }

    

    render(){
        return (
          <View style={{ flex: 1, backgroundColor: '#fff', height: '100%' }}>
            <NavBar title='Home' />
            
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }>
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
                onPress={() => this.props.navigation.navigate('Write')}>
                <Icon name="md-add" />
              </Fab>
            </View>

          </View>
            
        );
    }
}


export default Home