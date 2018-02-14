import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { Button } from '../../storybook/elements';

const wbImage = require('../img/wb.png');
const logoImage = require('../img/logo.png');

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

export default class Login extends React.Component {
  render() {
    return (
      <Grid>
        <Image source={wbImage} style={styles.backgroundImage} />
        <Row>
          <Grid>
            <Row size={1} style={styles.topContainer}>
              <Button text="Login" type="transparent" />
            </Row>
            <Row size={2} style={styles.container}>
              <Image source={logoImage} style={styles.logo} />
            </Row>
            <Row size={1} style={styles.justifyContent}>
              <Text style={styles.textStyle}>Welcome To Login page.</Text>
            </Row>
          </Grid>
        </Row>
      </Grid>
    );
  }
}
