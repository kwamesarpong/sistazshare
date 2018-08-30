import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';


class BackNavBar extends React.Component {
    render() {
      return (
          <Header androidStatusBarColor='#417F7F' style={{ backgroundColor: '#2DD7D9' }}>
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name='md-arrow-round-back' />
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

export default BackNavBar