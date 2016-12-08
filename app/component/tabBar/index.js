import React, {PropTypes} from 'react';
import {
  StyleSheet,
  ToolbarAndroid,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import IconTabBar from './tab'
class TabBar extends React.Component {
  render() {
    return (
      <View>
        <ScrollableTabView
          tabBarPosition='bottom'
          style={styles.tabBar}
          initialPage={2}
          renderTabBar={() => <IconTabBar />}
          >
          <ScrollView tabLabel="ios-infinite-outline" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-list-outline" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-add-circle-outline" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-mail-open-outline" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-person-outline" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}


TabBar.propTypes = {
};

const styles = StyleSheet.create({
  container:{
  },
  tabBar:{
    backgroundColor:'#eee',

  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    flex:1,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

module.exports = TabBar;
