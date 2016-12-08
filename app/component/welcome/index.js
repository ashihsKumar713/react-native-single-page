import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import ToolBar from './../toolbar';
import Statics from './../statics';
import Content from './../content';
import TabBar from './../tabBar';
import ShowCase from './../showcase';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <ToolBar />
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View>
              <Statics />
            </View>
            <View>
              <Content />
            </View>
            <View>
              <ShowCase />
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View>
            <TabBar />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flex:1,
  },
  body:{
    flex:12,
  },
  footer:{
    flex:1,
  },
});



module.exports = Welcome;
