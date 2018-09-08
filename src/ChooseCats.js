import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, ScrollView, TouchableOpacity, AsyncStorage, StatusBar } from 'react-native';
import { Icon, Button } from 'native-base';


class ChooseCats extends Component {

    state = {
      family: false,
      health: false,
      relationship: false,
      secrets: false,
      school: false,
      work: false
    }

    


    render(){
        return (
            <View>
              <StatusBar backgroundColor='#417F7F' />
              
              <ScrollView style={{ backgroundColor: '#fff', padding: 20, height: '90%' }}>

                <View style={{ alignItems: 'center', width: '100%', marginTop: 20, marginBottom: 20, paddingLeft: 30, paddingRight: 30 }}>
                  <Text style={{ marginBottom: 20, color: '#aaaaaa', fontSize: 16 }}>Tap to choose categories you would like to read stories from</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                  {
                    this.state.family ? (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#A4E3DA', borderColor: '#A4E3DA', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            family: false
                          })
                        }>
                          <Icon
                            type='Ionicons'
                            name='md-people'
                            style={{ color: '#5AB1A4', fontSize: 50, marginBottom: 25 }}/>
                          <Text style={{ color: '#5AB1A4' }}>Family</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#EDF9F8', borderColor: '#EDF9F8', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            family: true
                          })
                        }>
                          <Icon
                            type='Ionicons'
                            name='md-people'
                            style={{ color: '#DEEFED', fontSize: 50, marginBottom: 25 }}/>
                          <Text style={{ color: '#CDE7E3' }}>Family</Text>
                      </TouchableOpacity>
                    )
                  }

                  {
                    this.state.health ? (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#FDA88B', borderColor: '#FDA88B', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            health: false
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='heart-pulse'
                          style={{ color: '#E17A51', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#E17A51' }}>Health</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#FFEEE8', borderColor: '#FFEEE8', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            health: true
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='heart-pulse'
                          style={{ color: '#F9E4DC', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#F6D7CA' }}>Health</Text>
                      </TouchableOpacity>
                    )
                  }

                  {
                    this.state.relationship ? (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#9EBEF1', borderColor: '#9EBEF1', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            relationship: false
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='human-male-female'
                          style={{ color: '#6B8AC1', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#6B8AC1' }}>Relationship</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#E1EBFA', borderColor: '#E1EBFA', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            relationship: true
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='human-male-female'
                          style={{ color: '#D2DBEC', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#D2DBEC' }}>Relationship</Text>
                      </TouchableOpacity>
                    )
                  }

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                  {
                    this.state.secrets ? (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#F69FD6', borderColor: '#F69FD6', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            secrets: false
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='pencil-lock'
                          style={{ color: '#D75EAA', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#D75EAA' }}>Secrets</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#FCE2F2', borderColor: '#FCE2F2', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            secrets: true
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='pencil-lock'
                          style={{ color: '#F5D7EA', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#F3CEE5' }}>Secrets</Text>
                      </TouchableOpacity>
                    )
                  }

                  {
                    this.state.school ? (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#8786FB', borderColor: '#8786FB', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            school: false
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='school'
                          style={{ color: '#5250DC', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#5250DC' }}>School</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#E7E7FE', borderColor: '#E7E7FE', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            school: true
                          })
                        }>
                        <Icon
                          type='MaterialCommunityIcons'
                          name='school'
                          style={{ color: '#D4D3F6', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#CBCAF4' }}>School</Text>
                      </TouchableOpacity>
                    )
                  }
                  
                  {
                    this.state.work ? (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#F88C8C', borderColor: '#F88C8C', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            work: false
                          })
                        }>
                        <Icon
                          type='FontAwesome'
                          name='building'
                          style={{ color: '#DB5F5F', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#DB5F5F' }}>Work</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{ width: '30%', backgroundColor: '#FEE8E8', borderColor: '#FEE8E8', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}
                        onPress={
                          () => this.setState({
                            work: true
                          })
                        }>
                        <Icon
                          type='FontAwesome'
                          name='building'
                          style={{ color: '#F6D7D7', fontSize: 50, marginBottom: 25 }}/>
                        <Text style={{ color: '#F4CFCF' }}>Work</Text>
                      </TouchableOpacity>
                    )
                  }

                </View>

                {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                  <View style={{ width: '30%', backgroundColor: '#8CDCF7', borderColor: '#8CDCF7', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#4AA4C6', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#4AA4C6' }}>Relationship</Text>
                  </View>

                  <View style={{ width: '30%', backgroundColor: '#BCA1F2', borderColor: '#BCA1F2', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#8761D7', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#8761D7' }}>Relationship</Text>
                  </View>

                  <View style={{ width: '30%', backgroundColor: '#8CD5CA', borderColor: '#8CD5CA', borderWidth: 1, borderRadius: 5, alignItems: 'center', paddingTop: 30, paddingBottom: 20, marginBottom: 20 }}>
                    <Icon
                      type='MaterialCommunityIcons'
                      name='human-male-female'
                      style={{ color: '#41AA99', fontSize: 50, marginBottom: 25 }}/>
                    <Text style={{ color: '#41AA99' }}>Relationship</Text>
                  </View>

                </View> */}


              </ScrollView>
              
              <View style={{ alignItems: 'center', backgroundColor: '#fff', height: '10%' }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ backgroundColor: '#2DD7D9', paddingBottom: 15, paddingTop: 15, paddingLeft: 50, paddingRight: 50, borderRadius: 5 }}>
                  <Text style={{ color: '#fff' }}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}

export default ChooseCats