import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
  BackAndroid,
  Linking,
  BackHandler
} from "react-native";
export class Form extends React.Component {
  static navigationOptions = {
    title: "Follow the Instructions",
    headerStyle: { backgroundColor: "#b2bec3" },

    headerTitleStyle: { color: "#1e90ff" },
    headerRight: <Button title="Exit" onPress={() => BackAndroid.exitApp()} />
  };
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.replace("Select"); // works best when the goBack is async
      return true;
    });
  }

  render() {
    // hello = () => {
    //     // console.log.toString('write down your github app address here along with \'\' ')
    //         () =>  this.props.navigation.navigate('Download')
    //        Alert.alert('Good Work',
    //        'Downloading.....')

    // {/* <Text>write down your github app address here along with</Text> */}

    // }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#b2bec3"
        }}
      >
        <View>
          <Text style={Styles.text}>If you want to build the app :-</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={Styles.text}>
            1. Firstly install the expo in your pc.
          </Text>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: "#74b9ff", borderRadius: 6 }}
            onPress={() => {
              Linking.openURL(
                "https://docs.expo.io/versions/v29.0.0/introduction/installation/"
              );
            }}
          >
            <Text style={Styles.text}>click here</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={Styles.text}>
            2. Download zip file from here and extract in your pc.
          </Text>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: "#74b9ff", borderRadius: 6 }}
            onPress={() => {
              Linking.openURL(
                "https://github.com/vipularora51/React_Weather_App_with_code/archive/master.zip"
              );
            }}
          >
            <Text style={Styles.text}>Click here</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={Styles.text}>
            3. After that open cmd in that folder and run npm install
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={Styles.text}>
            4. In the app.json file in which change "package":
            "com.arora.weatherapp" . eg. com.vipul.weatherapp
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.text}>
            4. After that run "expo build:android"
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.text}>5. And your apk is ready</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  text: { fontWeight: "bold", fontSize: 15 }
});
