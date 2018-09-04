import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView, Image, TextInput, TouchableOpacity, Picker, AsyncStorage } from 'react-native';
import { Icon, Button } from 'native-base';
import BackNavBar from './BackNavBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';


class EditProfile extends Component {

    state = {
      firstname: '',
      lastname: '',
      location: '',
      dayOfBirth: '',
      monthOfBirth: '',
      yearOfBirth: ''
    }


    render(){
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
              <BackNavBar title='Edit Profile' backFunc={() => this.props.navigation.goBack()} />
              
              <ScrollView style={{ paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
                
                <View style={{ width: '100%', alignItems: 'center', marginBottom: 30 }}>
                  <Image
                    style={{ width: 80, height: 80, borderRadius: 50 }}
                    source={require('../assets/avatar.png')}/>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                  <View style={{ width: '40%' }}>
                    <Text style={{ color: '#b3b3b3' }}>First Name</Text>
                  </View>
                  <View style={{ width: '60%' }}>
                    <KeyboardAwareScrollView>
                      <TextInput 
                        placeholder='Anna'
                        placeholderTextColor='#d0d0d0'
                        selectionColor='#2DD7D9'
                        style={{ width: '100%' }}
                        onChangeText={(firstname) => this.setState({ firstname })}
                        underlineColorAndroid='#848484' />
                    </KeyboardAwareScrollView>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                  <View style={{ width: '40%' }}>
                    <Text style={{ color: '#b3b3b3' }}>Last Name</Text>
                  </View>
                  <View style={{ width: '60%' }}>
                    <KeyboardAwareScrollView>
                      <TextInput 
                        placeholder='Daniels'
                        placeholderTextColor='#d0d0d0'
                        selectionColor='#2DD7D9'
                        style={{ width: '100%' }}
                        onChangeText={(lastname) => this.setState({ lastname })}
                        underlineColorAndroid='#848484' />
                    </KeyboardAwareScrollView>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20 }}>
                  <View style={{ width: '40%' }}>
                    <Text style={{ color: '#b3b3b3' }}>Location</Text>
                  </View>
                  <View style={{ width: '60%' }}>
                    <KeyboardAwareScrollView>
                      <TextInput 
                        placeholder='San Francisco'
                        placeholderTextColor='#d0d0d0'
                        selectionColor='#2DD7D9'
                        style={{ width: '100%' }}
                        onChangeText={(location) => this.setState({ location })}
                        underlineColorAndroid='#848484' />
                    </KeyboardAwareScrollView>
                  </View>
                </View>

                <View style={{ borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingTop: 20, paddingBottom: 20, marginBottom: 40 }}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: '#b3b3b3' }}>Date of Birth</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}>
                      <Picker
                        selectedValue={this.state.dayOfBirth}
                        style={{ borderColor: '#d8d8d8', borderRadius: 5, borderWidth: 1, color: '#737373', height: 50, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ dayOfBirth: itemValue })}>
                        <Picker.Item label='01' value='01' />
                        <Picker.Item label='02' value='02' />
                        <Picker.Item label='03' value='03' />
                        <Picker.Item label='04' value='04' />
                        <Picker.Item label='05' value='05' />
                        <Picker.Item label='06' value='06' />
                        <Picker.Item label='07' value='07' />
                        <Picker.Item label='08' value='08' />
                        <Picker.Item label='09' value='09' />
                        <Picker.Item label='10' value='10' />
                        <Picker.Item label='11' value='11' />
                        <Picker.Item label='12' value='12' />
                        <Picker.Item label='13' value='13' />
                        <Picker.Item label='14' value='14' />
                        <Picker.Item label='15' value='15' />
                        <Picker.Item label='16' value='16' />
                        <Picker.Item label='17' value='17' />
                        <Picker.Item label='18' value='18' />
                        <Picker.Item label='19' value='19' />
                        <Picker.Item label='20' value='20' />
                        <Picker.Item label='21' value='21' />
                        <Picker.Item label='22' value='22' />
                        <Picker.Item label='23' value='23' />
                        <Picker.Item label='24' value='24' />
                        <Picker.Item label='25' value='25' />
                        <Picker.Item label='26' value='26' />
                        <Picker.Item label='27' value='27' />
                        <Picker.Item label='28' value='28' />
                        <Picker.Item label='29' value='29' />
                        <Picker.Item label='30' value='30' />
                        <Picker.Item label='31' value='31' />
                      </Picker>
                    </View>
                    <View style={{ width: '35%' }}>
                      <Picker
                        selectedValue={this.state.monthOfBirth}
                        style={{ borderColor: '#d8d8d8', borderRadius: 5, borderWidth: 1, color: '#737373', height: 50, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ monthOfBirth: itemValue })}>
                        <Picker.Item label='Jan' value='Jan' />
                        <Picker.Item label='Feb' value='Feb' />
                        <Picker.Item label='Mar' value='Mar' />
                        <Picker.Item label='Apr' value='Apr' />
                        <Picker.Item label='May' value='May' />
                        <Picker.Item label='Jun' value='Jun' />
                        <Picker.Item label='Jul' value='Jul' />
                        <Picker.Item label='Aug' value='Aug' />
                        <Picker.Item label='Sep' value='Sep' />
                        <Picker.Item label='Oct' value='Oct' />
                        <Picker.Item label='Nov' value='Nov' />
                        <Picker.Item label='Dec' value='Dec' />
                      </Picker>
                    </View>
                    <View style={{ width: '40%' }}>
                      <Picker
                        selectedValue={this.state.yearOfBirth}
                        style={{ borderColor: '#d8d8d8', borderRadius: 5, borderWidth: 1, color: '#737373', height: 50, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ yearOfBirth: itemValue })}>
                        <Picker.Item label='2017' value='2017' />
                        <Picker.Item label='2016' value='2016' />
                        <Picker.Item label='2015' value='2015' />
                        <Picker.Item label='2014' value='2014' />
                        <Picker.Item label='2013' value='2013' />
                        <Picker.Item label='2012' value='2012' />
                        <Picker.Item label='2011' value='2011' />
                        <Picker.Item label='2010' value='2010' />
                        <Picker.Item label='2009' value='2009' />
                        <Picker.Item label='2008' value='2008' />
                        <Picker.Item label='2007' value='2007' />
                        <Picker.Item label='2006' value='2006' />
                        <Picker.Item label='2005' value='2005' />
                        <Picker.Item label='2004' value='2004' />
                        <Picker.Item label='2003' value='2003' />
                        <Picker.Item label='2002' value='2002' />
                        <Picker.Item label='2001' value='2001' />
                        <Picker.Item label='2000' value='2000' />
                        <Picker.Item label='1999' value='1999' />
                        <Picker.Item label='1998' value='1998' />
                        <Picker.Item label='1997' value='1997' />
                        <Picker.Item label='1996' value='1996' />
                        <Picker.Item label='1995' value='1995' />
                        <Picker.Item label='1994' value='1994' />
                        <Picker.Item label='1993' value='1993' />
                        <Picker.Item label='1992' value='1992' />
                        <Picker.Item label='1991' value='1991' />
                        <Picker.Item label='1990' value='1990' />
                        <Picker.Item label='1989' value='1989' />
                        <Picker.Item label='1988' value='1988' />
                        <Picker.Item label='1987' value='1987' />
                        <Picker.Item label='1986' value='1986' />
                        <Picker.Item label='1985' value='1985' />
                        <Picker.Item label='1984' value='1984' />
                        <Picker.Item label='1983' value='1983' />
                        <Picker.Item label='1982' value='1982' />
                        <Picker.Item label='1981' value='1981' />
                        <Picker.Item label='1980' value='1980' />
                        <Picker.Item label='1979' value='1979' />
                        <Picker.Item label='1978' value='1978' />
                        <Picker.Item label='1977' value='1977' />
                        <Picker.Item label='1976' value='1976' />
                        <Picker.Item label='1975' value='1975' />
                        <Picker.Item label='1974' value='1974' />
                        <Picker.Item label='1973' value='1973' />
                        <Picker.Item label='1972' value='1972' />
                        <Picker.Item label='1971' value='1971' />
                        <Picker.Item label='1970' value='1970' />
                        <Picker.Item label='1969' value='1969' />
                        <Picker.Item label='1968' value='1968' />
                        <Picker.Item label='1967' value='1967' />
                        <Picker.Item label='1966' value='1966' />
                        <Picker.Item label='1965' value='1965' />
                        <Picker.Item label='1964' value='1964' />
                        <Picker.Item label='1963' value='1963' />
                        <Picker.Item label='1962' value='1962' />
                        <Picker.Item label='1961' value='1961' />
                        <Picker.Item label='1960' value='1960' />
                        <Picker.Item label='1959' value='1959' />
                        <Picker.Item label='1958' value='1958' />
                        <Picker.Item label='1957' value='1957' />
                        <Picker.Item label='1956' value='1956' />
                        <Picker.Item label='1955' value='1955' />
                        <Picker.Item label='1954' value='1954' />
                        <Picker.Item label='1953' value='1953' />
                        <Picker.Item label='1952' value='1952' />
                        <Picker.Item label='1951' value='1951' />
                        <Picker.Item label='1950' value='1950' />
                        <Picker.Item label='1949' value='1949' />
                        <Picker.Item label='1948' value='1948' />
                        <Picker.Item label='1947' value='1947' />
                        <Picker.Item label='1946' value='1946' />
                        <Picker.Item label='1945' value='1945' />
                        <Picker.Item label='1944' value='1944' />
                        <Picker.Item label='1943' value='1943' />
                        <Picker.Item label='1942' value='1942' />
                        <Picker.Item label='1941' value='1941' />
                        <Picker.Item label='1940' value='1940' />
                      </Picker>
                    </View>
                    
                  </View>
                </View>

                <View style={{ width: '100%', alignItems: 'center', marginBottom: 80 }}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{ backgroundColor: '#2DD7D9', borderRadius: 5, paddingTop: 15, paddingBottom: 15, paddingLeft: 50, paddingRight: 50 }}>
                      <Text style={{ color: '#fff' }}>Save</Text>
                    </TouchableOpacity>
                </View>
                

              </ScrollView>

            </View>
            
        );
    }
}

export default EditProfile