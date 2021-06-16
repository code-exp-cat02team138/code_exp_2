import * as React from "react";
import { Text, View, StyleSheet ,FlatList,Image, ScrollView} from "react-native";
import {useState} from "react";
import {Card ,Paragraph ,Button} from 'react-native-paper'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'




export default function NewsScreen() {
  const url = 'https://newsapi.org/v2/top-headlines?country=sg&sources?category=health&language=en&urlToImage&publishedAt&apiKey=0c46d81ed95c4e64af3a653eeb7f690e'
  const [DATA_1,setData]  = useState([
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Exercise and Benefits',
        image: "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors.jpg",
        publishedAt: "Published Today ",
        Publisher_name :"Straits Times",
        description: "Why should we exercise",
        pageContent:"SampleContent",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'New Health Tech',
        image: "https://venturebeat.com/wp-content/uploads/2018/06/digital-health-tech.shutterstock_690127048-1.jpg?w=1200&strip=all",
        description: "what is the health tech available now?",
        Publisher_name :"Straits Times",
        publishedAt: "Published Today ",
        pageContent:"SampleContent",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Stop Covid',
        image: "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg",
        description: "Stop Coivd",
        publishedAt: "Published yesterday ",
        Publisher_name :"Straits Times",
        pageContent:"SampleContent",
    },
]);


  return (
      <ScrollView>
      <Card style={{backgroundColor:'black'}}>
      <Text style={{textAlign:'top-left',fontSize:50,fontWeight:900, color:'white'}}>News</Text>
      </Card>
      <FlatList  data={DATA_1} renderItem={({ item })=>(
      <View>
      <Card style={{borderRadius:20}}>
      <Card.Cover source={item.image} style={styles.image}/>
      <Card.Content>
      <Badge value={<Text>{item.Publisher_name}</Text>}  style={{backgroundColor:'lightblue',textAlign:'right'}}/>
      <Card.Title title={item.title} subtitle={item.publishedAt}/>
  
      </Card.Content>
      <Card.Actions>
      <Button style= {{backgroundColor:'blue'}}><Text style={{color:"white"}}>Read</Text></Button>
      </Card.Actions>

      </Card>
      </View>
      )}/>
      </ScrollView>
      
  );
}

const styles= StyleSheet.create({
  container:{
    flex: 1,

  },
  Text_title:{
    textAlign :'Top-left',
    fontWeight:'bold',
    fontSize: 15,
  },
  image:{
     borderRadius:20
  
  }
  
})
