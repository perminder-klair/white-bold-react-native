import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const wbImage = require('../../../src/img/wb.png');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: 324,
    height: 175,
  },
});
const Card = () => (
  <View
    style={{
      alignItems: 'center',
    }}
  >
    <Grid
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={wbImage} style={styles.backgroundImage} />
      <Col
        style={{
          backgroundColor: 'blue',
          alignItems: 'center',
        }}
      >
        <Text>hellofhdkhvkfdnhvgdkkdf</Text>
      </Col>
      <Col
        style={{
          backgroundColor: 'red',
          alignItems: 'center',
        }}
      >
        <Text>hellofhdkhvkfdnhvgdkkdf</Text>
      </Col>
    </Grid>
  </View>
);

export { Card as default };
