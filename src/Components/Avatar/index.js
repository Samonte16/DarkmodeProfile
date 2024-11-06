import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const Avatar = ({ isDarkMode }) => { 
  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image
        source={require('../../assets/profile.png')}
        style={styles.image}
      />
      <View style={styles.joinedContainer}>
        <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Carlos Antonio Samonte</Text> 
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, isDarkMode && styles.darkText]}>Joined 8 years ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'pink',  
  },
  darkContainer: {
    backgroundColor: '#37474F',  
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 100,
    margin: 10,
    borderColor: '#E0E0E0',  
    borderWidth: 2,         
  },
  joinedContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#263238',  
    paddingTop: 15,
  },
  darkText: {
    color: '#E0E0E0', 
  },
  statusContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#6D6D6D',  
  },
});


export default Avatar;