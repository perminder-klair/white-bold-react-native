import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Button, Header } from '../storybook/elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'powderblue',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>hello</Text>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: 'skyblue',

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>hello</Text>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: 'steelblue',

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>hello</Text>
        </View>
      </View>
    );
  }
}
