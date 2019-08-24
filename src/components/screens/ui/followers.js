'use strict';

import React, { PureComponent } from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

class Followers extends PureComponent<FollowersProps, {}> {
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
          <Text>Remove</Text>
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
        data={this.props.followers}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default Followers;

const styles = StyleSheet.create({
  item: {}
});
