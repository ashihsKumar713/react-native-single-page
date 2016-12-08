import React, {PropTypes} from 'react';
import {
  StyleSheet,
  ToolbarAndroid,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ToolBar extends React.Component {
  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <View>
        <ToolbarAndroid
          actions={[{title: 'Settings', icon: require('./../../img/horiz_white.png'), show: 'always'}]}
          navIcon={require('./../../img/navigate_white.png')}
          style={styles.toolbar}
        >
          <View style={[styles.title, {   marginRight: width/3 ,}]}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'500'}}>
              BeckMartin
            </Text>
          </View>
        </ToolbarAndroid>
      </View>
    );
  }
}


ToolBar.propTypes = {
};

const styles = StyleSheet.create({
  container:{},
  toolbar:{
    height: 50,
    backgroundColor: '#00bfff',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00bfff',
  },
});

module.exports = ToolBar;
