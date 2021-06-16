import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BadgeCarousel from "./BadgeCarousel";

const SAMPLE_POSTS = [
  {
    username: "james_fitness",
    challengeText: "[CHALLENGE: 100 push-ups in 2 minutes]",
    text: "Nice! Challenge completed!",
    id: "1",
    image:
      "https://thumbs.dreamstime.com/b/young-man-doing-push-up-handsome-sporty-vietnamese-ups-gym-floor-139977973.jpg",
    comments: [
      {
        commenter: "jackson_lim",
        comment: "oh nice awesome man! keep it going",
      },
      {
        commenter: "apple_juice",
        comment: "solid work bro!",
      },
      {
        commenter: "zi_qian12",
        comment: "nice! IPPT sure gold",
      },
      {
        commenter: "cheemeng95",
        comment: "ups laaaaa",
      },
    ],
  },
  {
    username: "pamela",
    text: "twotwotwotwo",
    isChallenge: true,
    id: "2",
  },
  {
    username: "wayne",
    text: "threethreethree",
    id: "3",
    image:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=kgLC8iTd",
  },
  {
    username: "madhu",
    text: "fourfourfour",
    id: "4",
    image:
      "https://www.morelandobgyn.com/hs-fs/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg?width=400&name=GettyImages-854725402-1.jpg",
  },
];

const PROFILE_IMG =
  "https://www.pngkey.com/png/full/204-2049354_ic-account-box-48px-profile-picture-icon-square.png";

const Stack = createStackNavigator();

let count = -1;

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function ProfileScreen() {
  function renderItem({ item }) {
    count++;
    return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            alignSelf: 'center',
            height: item.image ? 300 : 80,
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
              source={{ uri: PROFILE_IMG }}
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
    <ScrollView style={{ flexDirection: "column", backgroundColor: "#264653" }}>
      <View
        id="dp_name_bio"
        style={{
          flexDirection: "row",
          backgroundColor: "#e9c46a",
          width: "98%",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 20,
        }}
      >
        <Image
          source={{ uri: PROFILE_IMG }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
            marginLeft: 10,
            marginVertical: 10,
          }}
        ></Image>
        <View
          id="name_bio"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 10,
            borderRadius: 20
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            @james_fitness
          </Text>
          <Text style={{ marginVertical: 2, width: "100%", color: "#264653" }}>
            Fitness enthusiast living in Singapore
          </Text>
        </View>
      </View>
      <View
        id="badges"
        style={{
          flexDirection: "column",
          marginVertical: 5,
          height: 250,
          alignItems: "flex-start",
          backgroundColor:'#f4a261',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            marginTop: 5,
            width: "90%",
            paddingVertical: 1,
            borderRadius: 10,
            color: "black",
            textAlign: "left",
            fontWeight: 'bold',
            marginLeft: 15
          }}
        >
          Badges - Swipe to see challenges you've completed
        </Text>
        <BadgeCarousel />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#264653",
        }}
      >
        <Text style={{alignSelf: 'flex-start', color:'white', fontWeight: 'bold', fontSize: 20, marginLeft: 15}}>Your Posts</Text>
        <FlatList
          style={{ width: "100%" }}
          data={SAMPLE_POSTS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}
