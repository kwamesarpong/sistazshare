import React, {Component} from 'react';
import { Root } from 'native-base';
import Navigator from './src/Routes';


export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <Navigator />
      </Root>
    );
  }
}
