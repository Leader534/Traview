'use strict';

import React, { PureComponent } from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

class Following extends PureComponent<FollowingProps, {}> {
  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => {
    return (
      <View>
        <View
          style={{
            padding: 24,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text>{item.name}</Text>
          <Text>Unfollow</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <FlatList
        data={this.props.following}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default Following;

const styles = StyleSheet.create({
  item: {}
});
