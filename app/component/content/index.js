import React, {PropTypes} from 'react';
import {
  StyleSheet,
  ToolbarAndroid,
  Image,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Content extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pictures}>
          <View style={[styles.leftIcon,]}>
            <View style={[styles.iconSize, {backgroundColor: '#5c2'}]}>
              <Image source={require('./../../img/message_white.png')}/>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require('./../../img/avatar.png')}
                style={styles.avatar}
                />
            </View>
          </View>
          <View style={[styles.rightIcon,]}>
            <View style={[styles.iconSize, {backgroundColor: '#00bfff'}]}>
              <Image source={require('./../../img/person_outline_white.png')}/>
            </View>
          </View>
        </View>
        <View style={styles.location}>
          <View>
            <Text style={styles.locationTxt}>
                Back Martin
            </Text>
          </View>
          <View>
            <Text style={styles.locationTxt}>
              &nbsp; | </Text>
           </View>
          <View>
            <View style={styles.locationIcon}>
              <Image source={require('./../../img/location_on_black.png')}
                style={{height:20,width:20}} />
              <Text style={styles.locationIconTxt}>
                &nbsp; Los Angeles, CA
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy tsaext of the printing indust.
            Lorem Ipsum has been the indsasasay's a standard dy text ever since the 15
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>
      </View>
    );
  }
}


Content.propTypes = {
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  //---------picture style---------
  pictures:{
    flex:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar:{
    flex:1,
    borderRadius:20,
    height:100,
    width:100,
  },
  leftIcon:{
    flex:1,
    alignItems: 'center',
  },
  rightIcon:{
    flex:1,
    alignItems: 'center'
  },
  iconSize:{
    padding:5,
    borderRadius:100,
  },
  //--------Location Style------
  location:{
    flex:2,
    paddingTop:7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationTxt:{
    fontSize:16,
    fontWeight: '500'
  },
  locationIcon:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIconTxt:{
    color: '#00bfff',
  },
  //-------text style-----------
  txtContainer:{
    flex:3,
    paddingTop:2,
  },
  text:{
    paddingLeft:20,
    paddingRight:20,
    textAlign:'justify',
  },
});

module.exports = Content;
