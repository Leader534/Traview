'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
  return <View style={styles.cardView}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardView: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5
  }
});
