import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import NavBar from './NavBar';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class Home extends Component {

    state = {
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
            <View>
              <NavBar title='Home' />
              
              <ScrollView>

                <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
                  <View style={styles.headingView}>
                    <Text style={{ color: '#0176ff', fontSize: 17 }}>Story</Text>
                  </View>

                  

                </View>
              </ScrollView>
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