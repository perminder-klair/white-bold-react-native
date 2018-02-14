import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Header } from '../storybook/elements';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
  },
  textStyle: {
    backgroundColor: 'transparent',
    color: '#ffff',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
  },
  logo: {
    width: 165,
    height: 114,
  },
  justifyContent: {
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <Image
          source={require('./img/wb.png')}
          style={styles.backgroundImage}
        />
        <Row>
          <Grid>
            <Row size={1} style={styles.topContainer}>
              <Button text="Login" type="transparent" />
            </Row>
            <Row size={2} style={styles.container}>
              <Image source={require('./img/logo.png')} style={styles.logo} />
            </Row>
            <Row size={1} style={styles.justifyContent}>
              <Text style={styles.textStyle}>Welcome To White & Bold CO.</Text>
            </Row>
          </Grid>
        </Row>
        <Row>
          <Grid>
            <Row size={1} style={styles.container}>
              <Button text="Facebook" type="primary" />
            </Row>
            <Row size={1} style={styles.container}>
              <Button text="Create Account" />
            </Row>
            <Row size={2} style={styles.justifyContent}>
              <Button text="More Option" type="transparent" />
            </Row>
          </Grid>
        </Row>
      </Grid>
    );
  }
}
