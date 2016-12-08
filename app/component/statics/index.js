import React, {PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Statics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.txtContqiner}>
          <Text style={styles.count}>
            95
          </Text>
          <View>
            <Text style={styles.title}>
              POSTS
            </Text>
          </View>
        </View>
        <View style={styles.txtContqiner}>
          <Text style={styles.count}>
            387
          </Text>
          <View>
            <Text style={styles.title}>
              FOLLOWERS
            </Text>
          </View>
        </View>
        <View style={styles.txtContqiner}>
          <Text style={styles.count}>
            407
          </Text>
          <View>
            <Text style={styles.title}>
              FOLLOWING
            </Text>
          </View>
        </View>
      </View>
    );
  }
}


Statics.propTypes = {
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:2,
    backgroundColor: '#eee',
    padding:5
  },
  txtContqiner:{
    flex:1,
    alignSelf: 'center',
  },
  count:{
    textAlign: 'center',
    fontSize:20
  },
  title:{
    textAlign: 'center',
    fontSize:10
  },

});


module.exports = Statics;
