import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Welcome from './../../component/welcome';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = Home;
