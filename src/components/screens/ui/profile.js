'use strict';

import { Text, StyleSheet, Image, View } from 'react-native';
import React, { PureComponent } from 'react';

type ProfileComponentProps = {};

class ProfileComponent extends PureComponent<ProfileComponentProps, {}> {
  constructor(props) {
    super(props);
  }

  renderTimelinePhoto() {
    return (
      <Image
        source={require('./../../assests/timeline.jpg')}
        style={styles.timelineImage}
      />
    );
  }

  renderProfilePhoto() {
    return (
      <View style={styles.profileView}>
        <Image
          style={styles.profileImage}
          source={require('./../../assests/suzy.jpeg')}
        />
      </View>
    );
  }

  renderUserBio() {
    const { username, userBio } = this.props;
    return (
      <View style={styles.bioView}>
        <Text style={styles.titleText}>Manisha</Text>
        <Text style={styles.baseText}>M a die hard suzy bae fan</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderTimelinePhoto()}
        {this.renderProfilePhoto()}
        {this.renderUserBio()}
      </View>
    );
  }
}

export default ProfileComponent;

const styles = StyleSheet.create({
  timelineImage: {
    height: 160,
    width: '100%'
  },
  profileImage: {
    height: 120,
    width: 120
  },
  profileView: {
    position: 'absolute',
    top: 100,
    left: 24,
    zIndex: 10000,
    marginBottom: 20
  },
  baseText: {
    fontFamily: 'Cochin'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bioView: {
    marginLeft: 150,
    marginBottom: 32
  }
});
