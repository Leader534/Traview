'use strict';

import * as HomeConstants from './../../constants/home';
import DynamicStringUtils from './../../libs/dynamicStringUtils';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View
} from 'react-native';
import React, { PureComponent } from 'react';
import Card from '../screens/ui/card';
import * as StaticData from '../../assests/static-data';
import ProfileComponent from '../screens/ui/profile';

type HomeProps = {
  username: string,
  userBio: string,
  posts: Array<Object>
};
type HomeState = {};

class Home extends PureComponent<HomeProps, HomeState> {
  static navigationOptions = {
    title: DynamicStringUtils.getMessage(HomeConstants.TITLE, 'Manisha')
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPosts() {
    const posts = StaticData.postData;
    return posts.map((post, index) => (
      <Card key={index}>
        <View style={styles.postView}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.description}>{post.description}</Text>
          <Image style={styles.image} source={{ uri: post.image }} />
        </View>
      </Card>
    ));
  }

  onCreatePost = () => {
    this.props.navigation.navigate('CreatePost');
  };

  renderCreatePost() {
    return (
      <TouchableOpacity onPress={this.onCreatePost}>
        <Card>
          <Text>Create Post</Text>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <ProfileComponent />
        {this.renderCreatePost()}
        {this.renderPosts()}
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  postView: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 10
  },
  image: {
    marginTop: 10,
    height: 300,
    width: '100%'
  }
});
