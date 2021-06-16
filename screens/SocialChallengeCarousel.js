import React from "react";
import {
  ViewBase,
  Image,
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get("window");
const challenges = [
  {
    title: "Pull-Ups",
    description: "5 Friends, 10 Minutes, 100 Pull-Ups",
    detailedDescription:
      "You and your friends have 10 minutes, can you do a 100 Pull-Ups? Record yourselves doing it and uplaod it on the app",
    image:
      "https://image.freepik.com/free-photo/athletic-sexy-girls-pull-up-bar-open-air-together-fitness-healthy-lifestyle_180601-1400.jpg",
  },
  {
    title: "Team Run",
    description: "Run a collective 50KM with 5 of your friends",
    detailedDescription:
      "Run a collective 50KM with 5 of your friends. Run individually and log your runs in the app",
    image:
      "https://st.focusedcollection.com/23619988/i/650/focused_266531378-stock-photo-smiling-young-asian-man-woman.jpg",
  },
  {
    title: "Planks",
    description: "FaceTime your friend for a quick Plank Sesh",
    detailedDescription:
      "Give your friend a call on FaceTime and have a chat over a 1-minute plank. Up for it?",
    image:
      "https://image.shutterstock.com/z/stock-photo-young-smiling-man-working-plank-on-sidewalk-front-view-733020931.jpg",
  },
];

export default class CooperateCarousel extends React.Component {
  state = {
    active: 0,
  };

  change = ({ nativeEvent }) => {
    const slide =
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };
  render() {
    return (
      <View style={{ width: "100%", height: "80%" }}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          style={{ width: "100%", height: "100%" }}
        >
          {challenges.map((item, index) =>
            index % 2 != 0 ? (
              <View
                style={{
                  width,
                  height: "100%",
                  flexDirection: "row",
                  borderRadius: 20,
                }}
              >
                <Image
                  key={index}
                  source={{ uri: item.image }}
                  style={{
                    width: 0.6 * width,
                    height: "100%",
                    resizeMode: "cover",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
                <View
                  id="Challenge Description"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bolder",
                      textAlign: "right",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      width: 0.35 * width,
                      marginLeft: 0.025 * width,
                      marginTop: 20,
                      textAlign: "right",
                      fontSize: 15,
                    }}
                  >
                    {item.description}
                  </Text>
                  <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(this.props.screenname, {item})
                  }
                  title="Challenge!"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 15,
                    marginTop: 10,
                  }}
                >
                  <Text>Challenge!</Text>
                </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View
                style={{
                  width,
                  height: "100%",
                  flexDirection: "row",
                  borderRadius: 20,
                }}
              >
                <View
                  id="Challenge Description"
                  style={{ flexDirection: "column", alignItems: "flex-start" }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bolder",
                      textAlign: "left",
                      marginLeft: 15,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      width: 0.35 * width,
                      marginHorizontal: 15,
                      marginTop: 20,
                      textAlign: "center",
                      fontSize: 15,
                      textAlign: "left",
                    }}
                  >
                    {item.description}
                  </Text>
                  <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(this.props.screenname, {item})
                  }
                  title="Challenge!"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 15,
                    marginTop: 10,
                  }}
                >
                  <Text>Challenge!</Text>
                </TouchableOpacity>
                </View>
                <Image
                  key={index}
                  source={{ uri: item.image }}
                  style={{
                    width: 0.65 * width,
                    height: "100%",
                    resizeMode: "cover",
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  }}
                />
              </View>
            )
          )}
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: { color: "#888", margin: 3, fontSize: 8 },
  pagingActiveText: { color: "#fff", margin: 3, fontSize: 8 },
});
