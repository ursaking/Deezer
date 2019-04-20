import React from 'react'
import { Text, View, StyleSheet, FlatList, ListItem, Image, TouchableOpacity } from 'react-native';
import Style from '../assets/style.js';
import { API_URL, API_TRACKS } from '../config.js';
import axios from 'axios';

export class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	static navigationOptions = {
    drawerLabel: 'Home',
  };
	state = {
		albums: [],
		tracks: [],
		artists: []
	  }
	componentDidMount() {
		axios.get(`https://api.deezer.com/chart`)
		  .then(res => {
			const tracks = res.data.tracks.data;
			const artists = res.data.tracks.data;
			const albums = res.data.albums.data;
			this.setState({ albums: albums, tracks: tracks, artists: artists });
		})
}
	render() {
		return(
			<View style={ Style.container }>
			<Text>Top 50</Text>
      <FlatList style={ Style.list }
        data={this.state.albums}
        renderItem={({ item }) => (
					<View>
					<Text>{item.artist.name }</Text>
					<Text>{item.title }</Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Album', {id: item.id })}>
					<Image
					style={{width: 100, height: 100}}
          source={{uri: item.cover}}
        />
				</TouchableOpacity>
					</View>
				)}
				keyExtractor={(item, index) => index.toString()}
      />
			</View>
			)
	}
}