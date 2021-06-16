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

const Root = createStackNavigator();
const Stack = createStackNavigator();

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
    text: "Feeling like a run tommorow :) Anyone want a challenge?",
    id: "2",
  },
  {
    username: "wayne_626",
    text: "All about that workout grind!!!",
    id: "3",
    image:
      "https://image.shutterstock.com/image-photo/young-handsome-asian-men-selfie-260nw-1925391113.jpg",
  },
  {
    username: "annie_ruok",
    text: "WOO! Gotta eat right to feel right",
    id: "4",
    image:
      "https://www.morelandobgyn.com/hs-fs/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg?width=400&name=GettyImages-854725402-1.jpg",
      comments: [
        {commenter: 'ginger-half',
      comment: 'hey looks good! share please'},
      {commenter: 'san_wen_yu',
      comment: 'what are u making???'},
      {commenter: 'brock_caulie',
    comment: 'looks awesome!!!!'}
      ]
  },
  {
    username: "fitspo_jane",
    text: "[CHALLENGE COMPLETE]: @sarah24 aiya was close!",
    id: "3",
    image:
      "https://preview.redd.it/l8lopfdn7eb51.jpg?width=720&format=pjpg&auto=webp&s=b2f241d3656e098efeedf9eb15f31e671d2801a7",
  },
];

const PROFILE_IMG =
  "https://www.pngkey.com/png/full/204-2049354_ic-account-box-48px-profile-picture-icon-square.png";

var count = -1;

function Post({ navigation, route }) {
  const [post, setPost] = useState(SAMPLE_POSTS);

  //for adding the create button
  useEffect(() => {
    count = -1;
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate("Create")}
        >
          <Ionicons name="create-outline" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });

  //for adding posts to your post screen
  useEffect(() => {
    const specItem = route.params?.item;
    if (specItem) {
      const specId = (post.length + 1).toString;
      specItem.id = specId;
      setPost([...post, specItem]);
      console.log("hey");
    }
  }, [route.params?.item]);

  function renderItem({ item }) {
    count++;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Specific Post", { item })}
      >
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
      </TouchableOpacity>
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
        data={post}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function SpecificPostScreen({ navigation, route }) {
  let specItem = route.params.item;
  let rando = Math.floor(Math.random() * 3);
  return (
    <View
      id="entire screen"
      style={{
        flexDirection: "column",
        backgroundColor:
          rando % 3 == 0 ? "#2a9d8f" : count % 3 == 1 ? "#e9c46a" : "#f4a261",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "100%",
      }}
    >
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          marginLeft: 8,
        }}
      >
        <Image
          source={{ uri: PROFILE_IMG }}
          style={{
            width: 30,
            height: 30,
            marginLeft: 10,
            marginTop: 10,
            borderRadius: 100,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 10,
            color: "white",
          }}
        >
          @{route.params.item.username}
        </Text>
      </View>
      <View
        id="picture and post"
        style={{ flexDirection: "column", width: "100%" }}
      >
        {specItem.image && (
          <Image
            source={{ uri: specItem.image }}
            style={{
              width: "90%",
              height: 250,
              resizeMode: "cover",
              borderRadius: 30,
              alignSelf: "center",
            }}
          />
        )}
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 15,
            color: "white",
          }}
        >
          "{specItem.text}"
        </Text>
      </View>
      {specItem.comments && (
        <View
          id="comment box"
          style={{ flexDirection: "column", marginTop: 20 }}
        >
          {specItem.comments.map((c) => {
            return (
              <View
                id="single_comment"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 25,
                }}
              >
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  @{c.commenter}
                </Text>
                <Text
                  style={{ marginLeft: 20, flexWrap: "wrap", color: "#264653" }}
                >
                  {c.comment}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

export default function RootStack() {
  return (
    <Root.Navigator mode="modal">
      <Root.Screen
        name="Feed Stack"
        component={FeedStack}
        options={{
          headerShown: false,
        }}
      />
      <Root.Screen name="Create" component={Create} />
    </Root.Navigator>
  );
}

function FeedStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={Post}
        options={{ headerTitle: "Feed" }}
      />
      <Stack.Screen
        name="Specific Post"
        component={SpecificPostScreen}
        options={{ headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}

function Create({ navigation }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
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

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const item = {
    username: "fitspo_jane",
    text: text,
    image: image,
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
      {!image && (
        <TouchableOpacity
          style={{
            width: "90%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f4a261",
            borderRadius: 30,
            marginTop: 30,
          }}
          onPress={pickImage}
        >
          <Entypo name="camera" size={50} color="black" />
          <Text>Click here to post an image!</Text>
        </TouchableOpacity>
      )}
      {image && <Image source={{ uri: image }} style={styles.createImage} />}
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
          placeholder="Tell us about your Health!"
          multiline
          onChangeText={(e) => setText(e)}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          text || image
            ? navigation.navigate("Post", { item })
            : navigation.navigate("Post")
        }
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
      >
        <Text>Submit Post!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    backgroundColor: "#e76f51",
    width: "90%",
    height: 100,
    marginVertical: 20,
    textAlign: "center",
    borderRadius: 20,
  },
  createImage: {
    width: "90%",
    height: 200,
    borderRadius: 30,
    marginTop: 30,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  createButton: {
    marginRight: 8,
  },
});
