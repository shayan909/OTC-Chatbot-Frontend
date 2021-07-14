// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  navigation.setOptions({tabBarVisible: false});

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      navigation.navigate('Login');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./image.png')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '40%',
          resizeMode: 'center',
          marginLeft: 130,
          marginBottom: 10,
        }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    marginLeft: 20,
    height: 50,
    marginTop: 1,
    marginBottom: 50,
  },
});
