import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

const SAMPLE_NEWS = [
  {
    username: "Channel News Asia",
    dp: "https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/8786976/16x9/991/557/b5725ccd88967cbdbc70aa882ad1c3b5/fk/cna-default-image.png",
    challengeText: "[CHALLENGE: 100 push-ups in 2 minutes]",
    text: "COVID-19 task force 'evaluating' timing and scope of reopening amid fresh outbreak: Lawrence Wong",
    id: "1",
    image:
      "https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/14720138/16x9/670/377/dbd77ae317bbf3d70eca112131c4bf7/cY/co-chair-of-the-task-force-lawrence-wong-apr-30--2021.jpg",
  },
  {
    username: "The Straits Times",
    dp: 'https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/02/game-of-survival-budget-2018/images/st-logo.svg',
    text: "Malaysia's hungry and it's not just the homeless as Covid-19 lockdown extended",
    image: 'https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2021/06/15/af_msialockdown_1506.jpg?itok=Kf6t7prJ&timestamp=1623755595',
    isChallenge: true,
    id: "2",
  },
  {
    username: "Channel News Asia",
    dp: 'https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/8786976/16x9/991/557/b5725ccd88967cbdbc70aa882ad1c3b5/fk/cna-default-image.png',
    text: "Exercising with your mask on? Fitness experts caution against pushing too hard amid new COVID-19 rules",
    id: "3",
    image:
      "https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/14933580/16x9/670/377/f95428985ea585717af9b11625eac707/Tw/spin-class-outdoors.jpg",
  },
  {
    username: "Today Online",
    dp: "https://www.todayonline.com/sites/all/themes/weekend/templates/static/img/todayapp_icon.bf2b63d.png",
    text: "19 community infections, including 3 unlinked, among 24 new Covid-19 cases in Singapore",
    id: "4",
    image:
      "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20210517_ili_community_generics_-5_1.jpg?itok=pTff2U8e",
  },
];

const PROFILE_IMG =
  "https://www.pngkey.com/png/full/204-2049354_ic-account-box-48px-profile-picture-icon-square.png";

var count = -1;

export default function NewsStack() {

  function NewsScreen() {
    const [news, setNews] = useState(SAMPLE_NEWS);

    function renderItem({ item }) {
      count++;
      return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              alignSelf: 'center',
              height: 320,
              width: "95%",
              backgroundColor:
                count % 3 == 0
                  ? "#2a9d8f"
                  : count % 3 == 1
                  ? "#e9c46a"
                  : "#f4a261",
                  borderRadius: 20,
                  marginVertical: 5
            }}
          >
            <View
              style={{
                flex: 2,
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={{ uri: item.dp }}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: 15,
                  marginTop: 15,
                  borderRadius: 100,
                }}
              ></Image>
            </View>
            <View
              style={{
                flexDirection: "column",
                flex: 8,
                justifyContent: "flex-start",
                fontFamily: "System",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "System",
                    fontWeight: "bold",
                    color: "white",
                    marginTop: 15,
                  }}
                >
                  @{item.username}
                </Text>
                <Text style={{ color: "white" }}>
                  {item.text.length > 110
                    ? `${item.text.substring(0, 111)}...read more`
                    : item.text}
                </Text>
              </View>
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "95%",
                    height: 210,
                    borderRadius: 20,
                    marginTop: 10,
                  }}
                />
              </View>
            </View>
          </View>
      );
    }

    return (
      <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#264653",
      }}
    >
      <FlatList
        style={{ width: "100%" }}
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    )

  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{ headerTitle: "News" }}
      />
    </Stack.Navigator>
  )
}