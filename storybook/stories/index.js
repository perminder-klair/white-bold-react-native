import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';

import Button from './Button'; // eslint-disable-line
import Input from './Input'; // eslint-disable-line
import List from './List'; // eslint-disable-line
import Header from './Header'; // eslint-disable-line
import Card from './Card'; // eslint-disable-line

const clothImage = require('../../src/img/cloth.png');
const wbImage = require('../../src/img/pexels.jpeg');
const blogImage = require('../../src/img/blog.png');

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('primary', () => (
    <Button text="primary" type="primary" onClick={action('clicked')} />
  ))
  .add('secondary', () => (
    <Button text="secondary" type="secondary" onClick={action('clicked')} />
  ))
  .add('rounded', () => (
    <Button text="rounded" type="rounded" onClick={action('clicked')} />
  ))
  .add('semiRounded', () => <Button text="Semi Rounded" type="semiRounded" />); //   </Button>
// .add('with long text', () => <Button text="Buttons2" />)
// .add('with some emoji', () => <Button text="😀 😎 👍 💯" loading />);
storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => <Input placeholder="boom" />);
storiesOf('List', module) // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('list', () => <List />);
storiesOf('Header', module) // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Header', () => <Header />);
storiesOf('Card', module) // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => (
    <Card
      type="basic"
      featuredTitle="Collection"
      featuredSubtitle="Discover our handpicked Stuff"
      basicImage={wbImage}
      children={
        <Button
          text="shop"
          buttonStyle={{
            width: 150,
            height: 40,
            borderWidth: 1,
            borderColor: '#ffff',
            borderRadius: 100,
            backgroundColor: 'transparent',
          }}
        />
      }
    />
  ))
  .add('Primary', () => (
    <Card
      type="primary"
      primaryImage={clothImage}
      featuredTitle="hand-picked arrivals from Best Designer"
    />
  ))
  .add('Secondary', () => (
    <Card
      type="secondary"
      secondaryImage={wbImage}
      featuredSecondaryTitle="Dresses"
      featuredSecondarySubtitle="136 items"
    />
  ))
  .add('Blog-card', () => (
    <Card
      type="blog-card"
      featuredTitle="Our Blog Articles"
      featuredSubtitle="How To Shop The Sales Like A Fashion Editor"
      basicImage={blogImage}
    />
  ));
