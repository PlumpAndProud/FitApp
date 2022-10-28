import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';

const window = Dimensions.get("screen");
const ratio = window.height / window.width;

export default function App(){
  return (
    <View style={styles.main}>
      {/* top bar - apps, camera etc */}
      <View style={styles.topBar}/>

        {/*wrapper and topbar with logo  */}
        <View style={styles.menuContainer}>
          <View>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Input your data')}>
              <Image style={styles.button}
                source={require('./img/menu.png')}
              />
            </TouchableOpacity>

          </View>
          <View>
            <Text style={styles.textTop}>Hemlo </Text>
          </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: window.width,
    height: window.height,
    flexDirection: "column",
    backgroundColor: '#303030',
  },
  
  topBar: {
    height: window.height * 0.04,
    backgroundColor: '#ABC',
  },

  menuContainer: {
    flexDirection: "row",
  },

  button: {
    height: window.height * 0.05,
    width: window.width * 0.05 * ratio,
    backgroundColor: "green",
  },

  textTop: {
    height: window.height * 0.05,
    width: window.width - (window.width * 0.05 * ratio),
    backgroundColor: "red",
    textAlign: "center",
    padding: window.height * 0.0125,
  },
});
