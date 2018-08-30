import React from 'react';
import { View, Text, TouchableOpacity, Image, ActionSheet } from 'react-native';
import { Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';




const StoryCard = (props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#fff', borderBottomColor: '#f4f4f4', borderBottomWidth: 1 }}
      activeOpacity={0.8}
      onPress={() => console.log("Hi")}>

      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, marginBottom: 20 }}>
        <View style={{ paddingTop: 20, width: '25%' }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 50 }}
            source={require('../assets/avatar.png')}/>
        </View>
        <View style={{ paddingTop: 30, width: '60%' }}>
          <Text style={{ color: '#555555', fontSize: 16 }}>Anna Daniels</Text>
          <Text style={{ color: '#b3b3b3', fontSize: 13 }}>A few seconds ago</Text>
        </View>
        <View style={{ paddingTop: 30, width: '15%' }}>
          <Button
            transparent
            /* onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Testing ActionSheet"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )} */>
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

      <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
        <View style={{ width: '10%' }}>
          <Icon
            name='comment'
            style={{ color: '#848484', fontSize: 20 }}
            type='EvilIcons' />
        </View>
        <View style={{ width: '90%' }}>
          <Text style={{ color: '#848484', fontSize: 13 }}>15 comments</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
}

export default StoryCard