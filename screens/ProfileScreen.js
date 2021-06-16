import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BadgeCarousel from "./BadgeCarousel";

const SAMPLE_POSTS = [
  {
    username: "james_fitness",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quas quos in asperiores repellendus mollitia esse",
    isChallenge: false,
    id: "1",
    image:
      "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors-768.jpg",
    comments: [
      {
        commenter_img: PROFILE_IMG,
        commenter: "applesaurce",
        comment:
          "really like apples tho kjhsdafkl;jsdfkljasdl;fjskladjvklashdlfkjaslfkjl;askdfjl;askdfjl;kdhfgkladjsfgkl;jawekl;fjlkasdfend",
      },
      {
        commenter_img: PROFILE_IMG,
        commenter: "orangesauce",
        comment: "really like orange tho",
      },
      {
        commenter_img: PROFILE_IMG,
        commenter: "bananasauce",
        comment: "really like banana tho",
      },
      {
        commenter_img: PROFILE_IMG,
        commenter: "limesauce",
        comment: "really like lime tho",
      },
    ],
  },
  {
    username: "james_fitness",
    text: "twotwotwotwo",
    isChallenge: true,
    id: "2",
    image:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=kgLC8iTd",
  },
  {
    username: "james_fitness",
    text: "threethreethree",
    id: "3",
    image:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=kgLC8iTd",
  },
  {
    username: "james_fitness",
    text: "fourfourfour",
    id: "4",
    image:
      "https://www.morelandobgyn.com/hs-fs/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg?width=400&name=GettyImages-854725402-1.jpg",
  },
];

const PROFILE_IMG =
  "https://www.pngkey.com/png/full/204-2049354_ic-account-box-48px-profile-picture-icon-square.png";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <ScrollView style={{ flexDirection: "column" }}>
      <View id="dp_name_bio" style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: PROFILE_IMG }}
          style={{
            height: 130,
            width: 130,
            borderRadius: 100,
            marginLeft: 10,
            marginTop: 10,
          }}
        ></Image>
        <View
          id="name_bio"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            @james_fitness
          </Text>
          <Text style={{ marginTop: 10, width: "80%" }}>
            I'm a fitness enthusiast living in Singapore
          </Text>
        </View>
      </View>
      <View
        id="badges"
        style={{ flexDirection: "column", marginTop: 20, height: 200 }}
      >
        <Text style={{ fontSize: 15, marginLeft: 3 }}>
          Badges - Swipte to see challenges you've completed
        </Text>
        <BadgeCarousel />
      </View>
      <View
        id="personal posts"
        style={{ marginTop: 10, fontSize: 15, marginLeft: 3 }}
      >
        <Text>Your Posts</Text>
          {SAMPLE_POSTS.map((p) => (
            <View
              style={{ width: "100%", height: 350, flexDirection: "column", }}
            >
              <Image
                source={{ uri: p.image }}
                style={{ width: "100%", height: 200 }}
              />
              <Text style={{fontSize: 20, marginTop: 30, textAlign:'center'}}>"{p.text}"</Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}
