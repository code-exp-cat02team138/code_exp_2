import React from 'react';
import { ViewBase, Image, ScrollView, View, Dimensions, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get("window");
const challenges = [
  { title: "3KM Run",
  description: "@sarah24 has challenged you to run 3KM",
  detailedDescription: "@sarah24 has challenged you to a run! Go for a 3KM run and see who comes out on top!",
  image: "https://www.active.com/Assets/Running/460/fartlek-beat-competition-460.jpg",
}, { title: "Push Ups",
  description: "@james_fitness has challenged you to a Push-up challenge! Will you take him on?",
  image: "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors-768.jpg",
}, { title: "Burpees",
  description: "@juliet_lim thinks she can do more burpees than you! Is she right?",
  image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/12/burpee.jpg?itok=uJ0vAAcx',
}, { title: 'Planks',
  description: '@charles_ong is planking hard! Thank youre better?',
  image: 'https://30dayfitness.app/static/a2902a44283070e930abe70bb77cc4d6/planks-for-beginners.jpeg',
},
]

export default class CompeteCarousel extends React.Component {

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
        <View style={{width: "100%", height: "80%",}}>
        <ScrollView pagingEnabled horizontal  onScroll={this.change} style={{width: "100%", height: '100%',}}>
        {challenges.map((item, index) => ( index % 2 == 0 ?
          <View style={{width, height: "100%", flexDirection: "row", borderRadius: 20, backgroundColor: '#2a9d8f'}}>
            <Image
          key={index}
          source={{uri: item.image}} style={{ width:0.60 * width, height: '100%', resizeMode: 'cover', borderTopRightRadius: 20, borderBottomRightRadius: 20}} />
          <View id="Challenge Description" style={{flexDirection: "column", alignItems: "flex-end", justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bolder', textAlign: 'right'}}>{item.title}</Text>
            <Text style={{width: 0.35 * width, marginLeft: 0.025 * width, marginTop:20, textAlign: 'right', fontSize:15, }}>{item.description}</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.props.screenname, {item})} title="Challenge!" style={{backgroundColor: 'white', borderRadius: 10, padding: 5, marginTop:10}}>
              <Text>Challenge!</Text>
            </TouchableOpacity>
          </View>
          </View>
          : <View style={{width, height: "100%", flexDirection: "row", borderRadius: 20, backgroundColor: '#2a9d8f'}}>
          <View
            id="Challenge Description"
            style={{ flexDirection: "column", alignItems: "flex-start", }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bolder", textAlign: 'left', marginLeft: 15, }}>
              {item.title}
            </Text>
            <Text
              style={{
                width: 0.35 * width,
                marginHorizontal: 15,
                marginTop: 20,
                textAlign: "center",
                fontSize: 15,
                textAlign: 'left'
              }}
            >
              {item.description}
            </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.props.screenname)} title="Challenge!" style={{backgroundColor: 'white', borderRadius: 10, padding: 5,marginLeft: 15, marginTop:10}}>
              <Text>Challenge!</Text>
            </TouchableOpacity>
          </View>
          <Image
            key={index}
            source={{ uri: item.image }}
            style={{ width: 0.65 * width, height: '100%', resizeMode: "cover", borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
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