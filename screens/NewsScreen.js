import * as React from "react";
import { Text, View, StyleSheet ,FlatList,Image} from "react-native";
import {useState} from "react";
import {Card } from 'react-native-paper'




export default function NewsScreen() {
  const [DATA_1,setData]  = useState([
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Exercise and Benefits',
        image: "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors.jpg",
        publishedAt: "Today",
        description: "Why should we exercise",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'New Health Tech',
        image: "https://venturebeat.com/wp-content/uploads/2018/06/digital-health-tech.shutterstock_690127048-1.jpg?w=1200&strip=all",
        description: "what is the health tech available now?",
        publishedAt: "Today",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Stop Covid',
        image: "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg",
        description: "Stop Coivd",
        publishedAt: "Today",
    },
]);

  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card>
      <Card.Title title="News"/>
      <Card.Content>
      <FlatList data={DATA_1}  renderItem={({ item }) => 
      <View>
      <Card>
      <Card.Title title={item.title} subtitle={item.publishedAt}></Card.Title>
      <Card.Cover source={item.image}></Card.Cover>
      <Text>{item.description}</Text>
      </Card>
      </View>
    }
    />
    </Card.Content>
    </Card>
    </View>
  );
}
