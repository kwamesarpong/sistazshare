import React from 'react';
import { View, Text, Image } from 'react-native';


const CommentCard = (props) => {
  return (
    <View style={{ borderBottomColor: '#f4f4f4', borderBottomWidth: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            <View style={{ paddingTop: 15, width: '20%' }}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    source={require('../assets/avatar.png')}/>
            </View>
            <View style={{ paddingTop: 15, width: '80%' }}>
                <Text style={{ color: '#848484', fontSize: 16 }}>Anna Daniels · 5h</Text>
                <Text style={{ color: '#aaaaaa' }}>The increment of the thermal heat of a system is equal to the increment of the internal heat of a system.</Text>
            </View>
        </View>
    </View>
  );
}

export default CommentCard