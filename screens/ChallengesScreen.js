import * as React from "react";
import {useState} from 'react';
import { Text, View, StyleSheet } from "react-native";
import TodayChallengeCarousel from "./TodayChallengeCarousel";
import SocialChallengeCarousel from "./SocialChallengeCarousel";
import AllChallengeCarousel from "./AllChallengeCarousel";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";

const challenges = [
  {
    title: "100 Push-Ups",
    description: "Do 100 Push-Ups in 3 Minutes.",
    detailedDescription: "Test your arms muscles with this Challenge! Do 100 Push-Ups in 3 Minutes, Take a video of yoourself and share it with everyone!",
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

function ChallengesScreen({ navigation }) {
  return (
    <View style={{ flexDirection: "column", height: "100%" }}>
      <View style={{ height: "33.3%", backgroundColor: "#2a9d8f" }}>
          <Text
            style={{
              fontWeight: "bolder",
              fontSize: 20,
              color: "white",
              marginBottom: 5,
              marginLeft: 14,
            }}
          >
            COMPETE
          </Text>
          <TodayChallengeCarousel navigation={navigation} screenname={"Specific Challenge"} />
      </View>

      <View style={{ height: "33.3%", backgroundColor: "#e9c46a" }}>
        <Text
          style={{
            fontWeight: "bolder",
            fontSize: 20,
            color: "white",
            marginBottom: 5,
            marginRight: 11,
            textAlign: "right",
          }}
        >
          COOPERATE
        </Text>
        <SocialChallengeCarousel />
      </View>
      <View style={{ height: "33.3%", backgroundColor: "#f4a261" }}>
        <Text
          style={{
            fontWeight: "bolder",
            fontSize: 20,
            color: "white",
            marginBottom: 5,
            marginLeft: 14,
          }}
        >
          All Challenges
        </Text>
        <AllChallengeCarousel />
      </View>
    </View>
  );
}

function SpecificChallenge({navigation, route}) {
  const [accepted, setAccepted] = useState(false);
  const challenge = route.params.item;
  return (
    <View style={{flexDirection:'column', justifyContent:'flex-start', height:'100%', backgroundColor:'#f4a261', alignItems:'center'}}>
        <Text style={{fontSize: 30, fontWeight:'bold', color:'white', backgroundColor:'#264653', width: '95%', textAlign: 'center', borderRadius: 20, marginVertical: 15}}>{challenge.title}</Text>
        <Image source={{uri: challenge.image}} style={{width:'95%' , height: '35%', borderRadius: 30, }}></Image>
        <View style={{height:'40%', width:'95%', backgroundColor: '#e9c46a', borderRadius: 20, marginTop: 15, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <Text style={{textAlign: 'center', fontSize: 20, lineHeight: 40, marginHorizontal: 10}}>{challenge.detailedDescription}</Text>
        </View>
        {!accepted && <TouchableOpacity style={{backgroundColor: '#e76f51', height: '8%', width:'95%', marginTop: '3%', borderRadius:20, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}} onPress={()=>setAccepted(true)}>
          <Text>Accept the Challenge!</Text>
        </TouchableOpacity>}
        {accepted && <View style={{backgroundColor: '#2a9d8f', height: '8%', width:'95%', marginTop: '3%', borderRadius:20, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <Text>Challenge Accepted</Text>
        </View>}
    </View>
    )
}

export default function ChallengeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Challenges" component={ChallengesScreen} />
      <Stack.Screen name="Specific Challenge" component={SpecificChallenge} options={{headerTitle:"Challenge!"}} />
    </Stack.Navigator>
  );
}
