import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TodayChallengeCarousel from "./TodayChallengeCarousel";
import SocialChallengeCarousel from "./SocialChallengeCarousel";
import AllChallengeCarousel from "./AllChallengeCarousel";
import { createStackNavigator } from "@react-navigation/stack";

const challenges = [
  {
    title: "100 Push-Ups",
    description: "Do a 100 Push-Ups in 3 Minutes.",
    image:
      "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors-768.jpg",
  },
  {
    title: "3km Run",
    description:
      "Go on a 3km Run around your neighbourhood. Track your run with a running app.",
    image:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=kgLC8iTd",
  },
  {
    title: "Pump Iron",
    description: "Head to your nearest Gym and get a work out going!",
    image:
      "https://img.etimg.com/photo/msid-74747053,quality-100/for-miles-a-great-bodyweight-workout-would-include-squats-push-ups-walking-lunges-.jpg",
  },
  {
    title: "Yoga",
    description:
      "Try these basic Yoga poses for a healthy body and clear mind.",
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/Female_Yoga_1296x728-header-1296x729.jpg?w=1155&h=2268",
  },
];

const Stack = createStackNavigator();

function ChallengesScreen() {
  return (
    <View style={{ flex: 1, flexDirection: "column", justifyContent:'space-between' }}>
      <View style={{ flex:1 , backgroundColor: '#2a9d8f'}}>
        <Text style={{ fontWeight: "bolder", fontSize: 20, color: 'white', marginBottom: 5, marginLeft: 14 }}>
          Today's Challenges
        </Text>
        <TodayChallengeCarousel />
      </View>
      <View style={{ flex:1 , backgroundColor: '#e9c46a' }}>
        <Text style={{ fontWeight: "bolder", fontSize: 20,color: 'white', marginBottom: 5, marginRight: 11, textAlign: 'right'  }}>
          Social Challenges
        </Text>
        <SocialChallengeCarousel />
      </View>
      <View style={{ flex:1 , backgroundColor: '#f4a261' }}>
        <Text style={{ fontWeight: "bolder", fontSize: 20, color: 'white', marginBottom: 5, marginLeft: 14  }}>
          All Challenges
        </Text>
        <AllChallengeCarousel />
      </View>
    </View>
  );
}

export default function ChallengeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Challenges" component={ChallengesScreen} />
    </Stack.Navigator>
  );
}
