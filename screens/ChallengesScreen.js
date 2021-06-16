import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import TodayChallengeCarousel from "./TodayChallengeCarousel";
import SocialChallengeCarousel from "./SocialChallengeCarousel";
import AllChallengeCarousel from "./AllChallengeCarousel";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const challenges = [
  {
    title: "100 Push-Ups",
    description: "Do 100 Push-Ups in 3 Minutes.",
    detailedDescription:
      "Test your arms muscles with this Challenge! Do 100 Push-Ups in 3 Minutes, Take a video of yoourself and share it with everyone!",
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
        <TodayChallengeCarousel navigation={navigation} screenname={"Create"} />
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
        <SocialChallengeCarousel
          navigation={navigation}
          screenname={"Specific Challenge"}
        />
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
        <AllChallengeCarousel
          navigation={navigation}
          screenname={"Specific Challenge"}
        />
      </View>
    </View>
  );
}

function SpecificChallenge({ navigation, route }) {
  const [accepted, setAccepted] = useState(false);
  const challenge = route.params.item;
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        backgroundColor: "#f4a261",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#264653",
          width: "95%",
          textAlign: "center",
          borderRadius: 20,
          marginVertical: 15,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
          {challenge.title}
        </Text>
      </View>
      <Image
        source={{ uri: challenge.image }}
        style={{ width: "95%", height: "35%", borderRadius: 30 }}
      ></Image>
      <View
        style={{
          height: "40%",
          width: "95%",
          backgroundColor: "#e9c46a",
          borderRadius: 20,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            lineHeight: 40,
            marginHorizontal: 10,
          }}
        >
          {challenge.detailedDescription}
        </Text>
      </View>
      {!accepted && (
        <TouchableOpacity
          style={{
            backgroundColor: "#e76f51",
            height: "8%",
            width: "95%",
            marginTop: "3%",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setAccepted(true);
            challenge.accepted = true;
          }}
        >
          <Text>Accept the Challenge!</Text>
        </TouchableOpacity>
      )}
      {accepted && (
        <View
          style={{
            backgroundColor: "#2a9d8f",
            height: "8%",
            width: "95%",
            marginTop: "3%",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Challenge Accepted</Text>
        </View>
      )}
    </View>
  );
}

function Create({ navigation }) {
  const [image, setImage] = useState('https://preview.redd.it/l8lopfdn7eb51.jpg?width=720&format=pjpg&auto=webp&s=b2f241d3656e098efeedf9eb15f31e671d2801a7');
  const [text, setText] = useState('')

  useEffect(() => {
    (async () => {
      pickImage();
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e9c46a",
        height: "100%",
      }}
    >
      <Image source={{ uri: image }} style={styles.createImage} />
      <View
        style={{
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Tell @sarah24 about your attempt!"
          multiline
          onChangeText={(e) => setText(e)}
        />
      </View>
      <TouchableOpacity
        title="Submit Post!"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2a9d8f",
          paddingVertical: 10,
          width: "90%",
          borderRadius: 20,
        }}
        onPress={()=>navigation.navigate("Challenges")}
      >
        <Text>Submit Post!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ChallengeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Challenges" component={ChallengesScreen} />
      <Stack.Screen
        name="Specific Challenge"
        component={SpecificChallenge}
        options={{ headerTitle: "Challenge!" }}
      />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  createImage: {
    width: "90%",
    height: 200,
    borderRadius: 30,
    marginTop: 30,
  },
  textInput: {
    borderColor: "black",
    backgroundColor: "#e76f51",
    width: "90%",
    height: 100,
    marginVertical: 20,
    textAlign: "center",
    borderRadius: 20,
  }
});
