import React from 'react';
import { ViewBase, Image, ScrollView, View, Dimensions, StyleSheet, Text } from 'react-native';

const {width} = Dimensions.get("window");
const challenges = [
  { title: "3KM Run",
  description: "@sarah24 has challenged you to run 3KM",
  detailedDescription: "@sarah24: Hey Jane! I ran 3KM in 18:02. Think you can do better? Come, come, come and try",
  image: "https://www.active.com/Assets/Running/460/fartlek-beat-competition-460.jpg"
  ,accepted: false},
  { title: "100 Push-Ups",
  description: "Do a 100 Push-Ups in 3 Minutes.",
  image: "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors-768.jpg",
}, { title: "3km Run",
  description: "Go on a 3km Run around your neighbourhood. Track your run with a running app.",
  image: "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=kgLC8iTd",
}, { title: "Pump Iron",
  description: "Head to your nearest Gym and get a work out going!",
  image: 'https://img.etimg.com/photo/msid-74747053,quality-100/for-miles-a-great-bodyweight-workout-would-include-squats-push-ups-walking-lunges-.jpg',
}, { title: 'Yoga',
  description: 'Try these basic Yoga poses for a healthy body and clear mind.',
  image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/Female_Yoga_1296x728-header-1296x729.jpg?w=1155&h=2268',
},
]

export default class BadgeChallengeCarousel extends React.Component {

  state = {
    active: 0
  }

  change = ({nativeEvent}) => {
    const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  }
    render() {
      return(
        <View style={{width: "100%", height: "90%", }}>
        <ScrollView pagingEnabled horizontal  onScroll={this.change} style={{width: "100%", height: '100%',}}>
        {challenges.map((item, index) => ( index % 2 == 0 ? 
          <View style={{width, height: "100%", flexDirection: "row",}}>
            <Image
          key={index}
          source={{uri: item.image}} style={{ width:0.60 * width, height: 200, resizeMode: 'cover', borderTopRightRadius: 20, borderBottomRightRadius: 20}} />
          <View id="Challenge Description" style={{flexDirection: "column", alignItems: "flex-end", justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bolder', textAlign: 'right'}}>{item.title}</Text>
            <Text style={{width: 0.35 * width, marginLeft: 0.025 * width, marginTop:20, textAlign: 'right', fontSize:15, }}>{item.description}</Text>
          </View>
          </View>
          : <View style={{ width, height: 200, flexDirection: "row" }}>
          <View
            id="Challenge Description"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bolder", textAlign: 'left', marginLeft: 15 }}>
              {item.title}
            </Text>
            <Text
              style={{
                width: 0.35 * width,
                marginLeft: 15,
                marginTop: 20,
                textAlign: "center",
                fontSize: 15,
                textAlign: 'left'
              }}
            >
              {item.description}
            </Text>
          </View>
          <Image
            key={index}
            source={{ uri: item.image }}
            style={{ width: 0.65 * width, height: 200, resizeMode: "cover", borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
          />
        </View>
        ))}
        </ScrollView>
        </View>
  
  
      )
  }
}

const style = StyleSheet.create({
  pagination: {flexDirection: "row", position: "absolute", bottom: 0, alignSelf: "center"},
  pagingText: {color: '#888', margin: 3, fontSize:8},
  pagingActiveText: {color: '#fff', margin:3, fontSize:8}
});