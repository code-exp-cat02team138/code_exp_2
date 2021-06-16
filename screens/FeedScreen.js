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
    text: "Nice! challenge accepted, challenge completed. Come join me :)",
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
            alignItems: 'flex-start',
            height: item.image ? 300 : 80,
            width: "100%",
            backgroundColor:
              count % 3 == 0
                ? "#2a9d8f"
                : count % 3 == 1
                ? "#e9c46a"
                : "#f4a261",
          }}
        >
          <View
            style={{
              flex: 2,
              flexDirection: "column",
              justifyContent: 'flex-start',
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
                style={{ width: "90%", height: 210, borderRadius: 20 }}
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
        backgroundColor: "white",
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
  return (
    <View id="entire screen" style={{ flexDirection: "column" }}>
      <View
        style={{
          height: 80,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: PROFILE_IMG }}
          style={{
            width: 40,
            height: 40,
            marginLeft: 10,
            borderRadius: 100,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 10,
            color: "#3e9ed6",
          }}
        >
          @{route.params.item.username}
        </Text>
      </View>
      <View id="picture and post" style={{ flexDirection: "column" }}>
        {specItem.image && (
          <Image
            source={{ uri: specItem.image }}
            style={{ width: "100%", height: 250, resizeMode: "contain" }}
          />
        )}
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 15 }}>
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
                    color: "#3e9ed6",
                  }}
                >
                  @{c.commenter}
                </Text>
                <Text style={{ marginLeft: 20, flexWrap: "wrap" }}>
                  {c.comment}
                </Text>
              </View>
            );
          })}
          <TextInput></TextInput>
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
    username: "jason_fitness",
    text: text,
    image: image,
  };

  return (
    <View style={{ flexDirection: "column" }}>
      {!image && (
        <TouchableOpacity
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
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
    backgroundColor: "white",
    width: "90%",
    height: 100,
    marginVertical: 30,
    textAlign: "center",
  },
  createImage: {
    width: "100%",
    height: 200,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  createButton: {
    marginRight: 8,
  },
});
