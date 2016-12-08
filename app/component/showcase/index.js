import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import IconTabBar from './../tabBar/tab'
class ShowCase extends React.Component {
  render() {
    var {height, width} = Dimensions.get('window');
    var img = {
      height: height/6,
      width: width/3.05,
    }
    return (
      <View style={styles.container}>
        <View style={styles.tabBar}>
          <ScrollableTabView
            tabBarPosition='bottom'
            style={styles.tabBar}
            initialPage={2}
            renderTabBar={() => <IconTabBar />}
            >
            <ScrollView tabLabel="ios-keypad-outline" style={styles.tabView}>
              <View style={styles.card}>
                <Text>News</Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="ios-list-outline" style={styles.tabView}>
              <View style={styles.card}>
                <Text>News</Text>
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
        <View style={{flex:1}}>
          <ScrollView>
            <View style={styles.imgContainer}>
              <View>
                <Image source={require('./../../img/img1.jpg')} style={img}/>
              </View>
              <View >
                <Image source={require('./../../img/img2.jpg')} style={img}/>
              </View>
              <View>
                <Image source={require('./../../img/img3.jpg')} style={img}/>
              </View>
              </View>
              <View style={styles.imgContainer}>
              <View>
                <Image source={require('./../../img/img4.jpg')} style={img}/>
              </View>
              <View >
                <Image source={require('./../../img/img5.jpg')} style={img}/>
              </View>
              <View>
                <Image source={require('./../../img/img6.jpg')} style={img}/>
              </View>
              </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}


ShowCase.propTypes = {
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    paddingTop:5
  },
  imgContainer:{
    flex:1,
    paddingTop:3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBar:{
    marginTop: 2,
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

module.exports = ShowCase;
