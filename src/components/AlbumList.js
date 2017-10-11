import React from 'react';
import { View, Text } from 'react-native';
//import axios from 'axios';
import { backupdata } from '../backupdata';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {

  state = { albums: [] };

  componentWillMount() {
    // axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    //   .then(res => console.log(res))
    this.setState({ albums: backupdata })
  }

  renderAlbums = () => {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
//class do not require semicolon

export default AlbumList;
