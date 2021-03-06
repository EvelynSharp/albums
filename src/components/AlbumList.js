import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {

  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data}))
      .catch(err => console.log(err))

  }

  renderAlbums = () => {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
//class do not require semicolon

export default AlbumList;
