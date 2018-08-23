import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';


class NavBar extends React.Component {
    render() {
      return (
          <Header androidStatusBarColor='#003B7F' style={{ backgroundColor: '#0176ff' }}>
            <Left>
              <Button transparent onPress={() => Actions.drawerOpen()}>
                <Icon name='md-menu' />
              </Button>
            </Left>
            <Body style={{alignItems: 'center'}}>
              <Title>{this.props.title}</Title>
            </Body>
            <Right>
            </Right>
          </Header>
      );
    }
}

export default NavBar