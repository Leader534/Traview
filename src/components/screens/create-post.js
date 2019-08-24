'use strict';

import * as CreatePostConstants from './../../constants/create-post';
import * as CreatePostActions from '../../actions/create-post';
import DynamicStringUtils from './../../libs/dynamicStringUtils';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  Button
} from 'react-native';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Card from '../screens/ui/card';
import * as StaticData from '../../assests/static-data';
import ProfileComponent from '../screens/ui/profile';
import MaterialTextFieldeld from '../screens/ui/text-field';
import StarRating from 'react-native-star-rating';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
//import HomePost from './../screens/home-post';

type CreatePostProps = {
  username: string,
  userBio: string,
  posts: Array<Object>
};
type CreatePostState = {
  title: string,
  reviewDescription: string,
  location: string,
  suggestions: string
};

class CreatePost extends PureComponent<CreatePostProps, CreatePostState> {
  static navigationOptions = {
    title: 'Create Post'
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      starCount: 0,
      photo: null,
      suggestions: '',
      redirect: false
    };
  }

  ChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  // renderAddImage() {
  //   return;
  // }

  onChangeText = (value, id) => {
    this.setState({ [id]: value });
  };

  renderAddTitle() {
    return (
      <MaterialTextFieldeld
        id={'title'}
        label={'Enter a caption'}
        onChangeText={this.onChangeText}
        style={{ flex: 1, marginBottom: 20 }}
      />
    );
  }

  renderLocation() {
    return (
      <MaterialTextFieldeld
        id={'location'}
        label={'Enter a location'}
        onChangeText={this.onChangeText}
      />
    );
  }

  renderReviewDescription() {
    return (
      <View style={styles.description}>
        <MaterialTextFieldeld
          id={'reviewDescription'}
          label={'Enter a review descrition'}
          onChangeText={this.onChangeText}
        />
        <TextInput {...this.props.description} editable={true} maxLength={40} />
      </View>
    );
  }

  renderSuggestions() {
    return (
      <View style={styles.description}>
        <MaterialTextFieldeld
          id={'Suggestions'}
          label={'Enter suggestion'}
          onChangeText={this.onChangeText}
        />
        <TextInput {...this.props.description} editable={true} maxLength={40} />
      </View>
    );
  }

  onStarRatingPress = rating => {
    this.setState({ starCount: rating });
  };

  renderReviewStars() {
    return (
      <View style={{ marginTop: 30 }}>
        <Text>Set Stars:</Text>
        <StarRating
          disabled={false}
          halfStarEnabled={true}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={this.onStarRatingPress}
        />
      </View>
    );
  }

  onChoosePhoto = () => {
    this.props.navigation.navigate('ChoosePhoto');
  };

  renderChoosePhoto() {
    const { photo } = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30
        }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.onChoosePhoto} />
      </View>
    );
  }

  onHomePost = () => {
    this.props.navigation.navigate('HomePost');
  };

  renderHomePost() {
    return (
      <View>
        <TouchableHighlight
          style={(styles.buttonContainer, styles.postButton)}
          onPress={this.onHomePost}>
          <Text style={styles.postText}>Post</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onCreatePost = () => {
    const { title, description, starCount, location, photo } = this.state;
    this.props.onCreatePost({
      title: title,
      description: description,
      starCount: starCount,
      location: location,
      photo: photo
    });
  };

  render() {
    if (this.props.res) {
      return <div>yay{res}</div>;
    } else {
      return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {this.renderAddTitle()}
          {this.renderChoosePhoto()}
          {this.renderLocation()}
          {this.renderReviewStars()}
          {this.renderReviewDescription()}
          {this.renderSuggestions()}
          {this.renderHomePost()}
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => {
  return { ...state.createPostReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreatePost: postData => {
      CreatePostActions.onCreatePost(postData);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    marginBottom: 20
  },
  // postView: {
  //   padding: 10
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    marginTop: 10,
    height: 300,
    width: '100%'
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  postButton: {
    backgroundColor: '#00b5ec',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 30
  },
  postText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
});
