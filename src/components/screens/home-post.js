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
import * as StaticData from '../../assests/static-post';
import ProfileComponent from '../screens/ui/profile';

type HomeProps = {
  username: string,
  userBio: string,
  posts: Array<Object>
};
type HomeState = {};

class HomePost extends PureComponent<HomeProps, HomeState> {
  static navigationOptions = {
    title: DynamicStringUtils.getMessage(HomeConstants.TITLE, 'Manisha')
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPosts() {
    const posts = StaticData.post_Data;
    return posts.map((post, index) => (
      <Card key={index}>
        <View style={styles.postView}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.location}>{post.location}</Text>
          <Text style={styles.description}>{post.description}</Text>
          <Image style={styles.ratings} source={{ uri: post.ratings }} />
          <Text style={styles.suggestions}>{post.suggestions}</Text>
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

export default HomePost;

const styles = StyleSheet.create({
  postView: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14
  },
  image: {
    marginTop: 10,
    height: 300,
    width: '100%'
  },
  ratings: {
    marginTop: 10,
    height: 60,
    width: '100%'
  },
  suggestions: {
    fontSize: 14
  }
});
