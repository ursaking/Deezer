import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListItem,
  Image,
  TouchableOpacity,
  Picker
} from "react-native";
import Style from "../assets/style.js";
import { API_URL, API_TRACKS } from "../config.js";
import axios from "axios";

export class AlbumScreen extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.navigation.state.params.id;
    console.log(this.id);
  }
  static navigationOptions = {
    drawerLabel: "Album"
  };
  state = {
    art: []
  };
  componentDidMount() {
    axios.get(`https://api.deezer.com/album/` + this.id).then(res => {
      const art = res.data;
      this.setState({ art: art });
    });
  }
  render() {
    return (
      <View style={Style.container}>
        <View>
          <Picker selectedValue={this.state.art} style={{ height: 50, width: 100 }}>
            {this.state.art.map(album => {
              <Picker.item label={album} value={album} key={album} />;
            })}
          </Picker>
          <Text>{this.state.art.name}</Text>
          <Image
            style={{
              width: 200,
              height: 200,
              paddingBottom: 200,
              paddingRight: 500,
              marginBottom: 450
            }}
            source={{ uri: this.state.art.cover_xl }}
          />
        </View>
      </View>
    );
  }
}
