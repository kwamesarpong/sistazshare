import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


class NavBar extends React.Component {
    render() {
      return (
          <Header androidStatusBarColor='#417F7F' style={{ backgroundColor: '#2DD7D9' }}>
            <Left>
              <Button transparent onPress={this.props.openDrawer}>
                <Icon name='md-menu' />
              </Button>
            </Left>
            <Body style={{alignItems: 'center'}}>
              <Title>{this.props.title}</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.goToSearch}>
                <Icon name='md-search' />
              </Button>
            </Right>
          </Header>
      );
    }
}

export default NavBar