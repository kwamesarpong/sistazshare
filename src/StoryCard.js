import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Button, ActionSheet } from 'native-base';
import { Actions } from 'react-native-router-flux';


var BUTTONS = ["Keep", "Report", "Cancel"];
var CANCEL_INDEX = 2;

class StoryCard extends Component {
  state = {
    indexClicked: ''
  }


  render(){
    return (
      <TouchableOpacity
        style={{ backgroundColor: '#fff', borderBottomColor: '#f4f4f4', borderBottomWidth: 5 }}
        activeOpacity={0.6}
        onPress={() => console.log("Hi")}>

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
          {/* <View style={{ width: '25%' }}></View> */}
          <View style={{ width: '100%' }}>
            <Text style={{ color: '#000000', marginBottom: 5 }}>My Secret Fantasies</Text>
            <Text style={{ color: '#848484' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system...READ STORY</Text>
          </View>
        </View>
        
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20, paddingTop: 10 }}>
            <View style={{ alignItems: 'center', width: '30%', flexDirection: 'row' }}>
              <Icon
                name='comment'
                style={{ color: '#848484', fontSize: 20 }}
                type='EvilIcons' />
              <Text style={{ color: '#848484', fontSize: 13 }}>3</Text>
            </View>
            <View style={{ alignItems: 'center', width: '40%', flexDirection: 'row' }}>
              <Icon
                name='comment'
                style={{ color: '#848484', fontSize: 20 }}
                type='EvilIcons' />
              <Text style={{ color: '#848484', fontSize: 13 }}>10</Text>
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

      </TouchableOpacity>
    );
  }

}

export default StoryCard