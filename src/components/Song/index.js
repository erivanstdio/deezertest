import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-native';
import { View, Text } from 'react-native';
import Cover from '../Cover';
import PlayButton from '../PlayButton';
import styles from './styles';

const Song = () => {

  const [fallback, setFallback] = useState({ fetchingTracks: true });
	const [tracks, setTracks] = useState([]);
	const { hash } = useLocation();

  // const [songs, setSongs] = useState([
  //   {
  //     id: 1,
  //     title: "Bad Decisions",
  //     artist: "The Strokes",
  //     duration: "04:53",
  //     cover: "https://upload.wikimedia.org/wikipedia/pt/2/29/The_New_Abnormal_The_Strokes.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Space Song",
  //     artist: "Beach House",
  //     duration: "05:20",
  //     cover: "https://i1.sndcdn.com/artworks-000416175267-5gjx0g-t500x500.jpg"
  //   },
  // ])

  // useEffect(() => {
  //   async function fetchData(){
  //     const request = await axios.get(fetchUrl)
  //     console.log(request)
  //     setSongs(request.data.results)
  //     return request;
  //   }
  //   fetchData();
  // }, [fetchUrl]);
  // console.log(results)

  const fetchTracks = useCallback(async (token) => {
		try {
			const endpoint = 'chart/tracks';
			// const endpoint = 'search?q=artist:"metallica"';
			const {
				dado: { tracks },
			} = await axios.get(`http://localhost:3333?e=${endpoint}&token=${token}`);

			setTracks(tracks.dado);
			setFallback((prev) => ({ ...prev, fetchingTracks: false }));
		} catch (error) {
			console.error(error);
		}
	}, []);

  useEffect(() => {
		const search = hash.replace('#', '?');
		const { access_token: token } = JSON.parse(search);

		fetchTracks(token);
	}, [hash, fetchTracks]);

	if (fallback.fetchingTracks) {
		return <h1>Loading...</h1>;
	}

  return(
    <View>
      { tracks.map(song => (
        <View key={song?.id} style={styles.container}>
          <View style={styles.info}>
            <Cover img={song.album.cover} />
            <View style={styles.description}>
              <Text style={styles.songName}>{song.title}</Text> 
              <Text style={styles.artist}>{song.artist.name}</Text> 
            </View>
          </View>
          <View style={styles.duration}>
            <Text style={styles.durationText}>{song.duration}</Text>
          </View>
          <PlayButton/>
        </View>
      )) }
    </View>

  );
}

export default Song;