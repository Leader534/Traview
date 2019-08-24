'use strict';

import * as ProfileConstants from '../../constants/profile';
import * as ProfileActions from '../../actions/profile';
import DynamicStringUtils from '../../libs/dynamicStringUtils';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  Button
} from 'react-native';
import React, { PureComponent } from 'react';
import Card from '../screens/ui/card';
import * as StaticData from '../../assests/static-data';
import ImagePicker from 'react-native-image-crop-picker';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Followers from '../screens/ui/followers';
import Following from '../screens/ui/following';
import ProfileComponent from '../screens/ui/profile';
//import { connect } from 'react-redux';

type ProfileProps = {
  followers: {
    id: string,
    name: string
  },
  following: {
    id: string,
    name: string
  }
};

type ProfileState = {
  remove: string,
  unfollow: string
};

export default class Profile extends PureComponent<ProfileProps, ProfileState> {
  static navigationOptions = {
    title: DynamicStringUtils.getMessage(ProfileConstants.TITLE)
  };
  constructor(props: ProfileProps) {
    super(props);
  }

  renderEdit() {
    return (
      <View style={(styles.buttonContainer, styles.editButton)}>
        <Button style={styles.editText} title="Edit" />
      </View>
    );
  }
  renderFollowTab() {
    return (
      <ScrollableTabView>
        <Followers
          tabLabel="Followers"
          followers={[
            { id: '1', name: 'manisha' },
            { id: '2', name: 'sunaina' },
            { id: '3', name: 'vikas' }
          ]}
        />
        <Following
          tabLabel="Following"
          following={[
            { id: '1', name: 'manisha' },
            { id: '2', name: 'sunaina' },
            { id: '3', name: 'vikas' }
          ]}
        />
      </ScrollableTabView>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ProfileComponent />
        {this.renderEdit()}
        {this.renderFollowTab()}
      </ScrollView>
    );
  }
}

// const mapStateToProps = state => {
//   return { ...state.profileReducer };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchFollowersAndFollowing: () => {
//       dispatch(ProfileActions.fetchFollowersAndFollowing());
//     },
//     removeFollowers: id => {
//       dispatch(ProfileActions.removeFollowers(id));
//     },
//     removeUnfollowing: id => {
//       dispatch(ProfileActions.removeFollowing(id));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Profile);

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  editButton: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center',
    borderRadius: 30
  },
  editText: {
    color: 'white'
  }
});
