import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Button from '../Button';

const clothImage = require('../../../src/img/cloth.png');
const wbImage = require('../../../src/img/pexels.jpeg');
const arrowImage = require('../../../src/img/arrow.png');

const styles = StyleSheet.create({
  container: {
    height: 175,
    margin: 15,
  },
  wrapper: {
    height: 175,
    width: 324,
    backgroundColor: '#f4f4f4',
  },
  secondaryWrapper: {
    height: 155,
    width: 187,
  },
  justifier: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredTitle: {
    fontSize: 30,
    color: '#31363d',
  },
  otherTitle: {
    fontSize: 24,
    color: '#ffffff',
    marginTop: 28,
  },
  featuredSubtitle: {
    fontSize: 16,
    color: '#31363d',
  },
  otherSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    margin: 15,
  },
  cardNumber: {
    fontWeight: '800',
    fontSize: 50,
    color: '#358ed7',
  },
  backgroundImage: {
    position: 'absolute',
    height: 175,
    width: 324,
  },
  secondaryBackgroundImage: {
    position: 'absolute',
    height: 155,
    width: 187,
    opacity: 0.77,
  },
  Image: {
    height: 175,
    resizeMode: 'contain',
  },
  textStyle: {
    backgroundColor: 'transparent',
  },
});

const Card = props => {
  const {
    type,
    featuredTitle,
    featuredSubtitle,
    featuredSecondaryTitle,
    featuredSecondarySubtitle,
    children,
    primaryImage,
    basicImage,
    secondaryImage,
  } = props;
  return (
    <View style={[styles.justifier, styles.container]}>
      {type === 'primary' && (
        <Grid style={[styles.justifier, styles.wrapper]}>
          <Col size={1} style={styles.justifier}>
            <Image source={primaryImage} style={styles.Image} />
          </Col>
          <Col size={2}>
            <Grid>
              <Row>
                <Col size={1} style={styles.justifier}>
                  <Text style={[styles.textStyle, styles.cardNumber]}>67</Text>
                </Col>
                <Col size={2} style={styles.justifier}>
                  <Text style={styles.textStyle}>{featuredTitle}</Text>
                </Col>
              </Row>
              <Row style={styles.justifier}>
                <Button
                  text="Shop All"
                  type="rounded"
                  buttonStyle={{ backgroundColor: 'transparent' }}
                />
              </Row>
            </Grid>
          </Col>
        </Grid>
      )}
      {type === 'basic' && (
        <Grid style={[styles.justifier, styles.wrapper]}>
          <Image source={basicImage} style={styles.backgroundImage} />
          <Row size={1} style={[styles.justifier, { marginTop: 15 }]}>
            <Text style={[styles.featuredTitle, styles.textStyle]}>
              {featuredTitle}
            </Text>
          </Row>
          <Row size={1}>
            <Text style={(styles.featuredSubtitle, styles.textStyle)}>
              {featuredSubtitle}
            </Text>
          </Row>
          <Row size={1} style={{ marginBottom: 15 }}>
            {children}
          </Row>
        </Grid>
      )}
      {type === 'secondary' && (
        <Grid style={[styles.justifier, styles.secondaryWrapper]}>
          <Image
            source={secondaryImage}
            style={styles.secondaryBackgroundImage}
          />
          <Row size={1} style={[styles.justifier, { marginTop: 15 }]}>
            <Text style={[styles.otherTitle, styles.textStyle]}>
              {featuredSecondaryTitle}
            </Text>
          </Row>
          <Row size={1}>
            <Text style={[styles.otherSubtitle, styles.textStyle]}>
              {featuredSecondarySubtitle}
            </Text>
          </Row>
          <Row size={1} style={{ marginBottom: 15 }}>
            <TouchableHighlight onPress={() => {}} underlayColor="transparent">
              <Image
                source={arrowImage}
                style={{ height: 16, width: 16, marginBottom: 35 }}
              />
            </TouchableHighlight>
          </Row>
        </Grid>
      )}
      {type === 'blog-card' && (
        <Grid style={[styles.justifier, styles.wrapper]}>
          <Image source={basicImage} style={styles.backgroundImage} />
          <Row size={1} style={[styles.justifier, { marginTop: 15 }]}>
            <Text style={[styles.otherTitle, styles.textStyle]}>
              {featuredTitle}
            </Text>
          </Row>
          <Row size={1}>
            <Text style={[styles.otherSubtitle, styles.textStyle]}>
              {featuredSubtitle}
            </Text>
          </Row>
          <Row size={1} style={{ marginBottom: 15 }}>
            <TouchableHighlight onPress={() => {}} underlayColor="transparent">
              <Image
                source={arrowImage}
                style={{ height: 16, width: 16, marginBottom: 35 }}
              />
            </TouchableHighlight>
          </Row>
        </Grid>
      )}
    </View>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
};
export { Card as default };
