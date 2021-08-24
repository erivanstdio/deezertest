import React, { useEffect } from 'react';
import { Text } from 'react-native';

const Loading = () => {
	useEffect(() => {
		const appId = '499262';
		const redirectUri = 'http://localhost:3000/tracks';
		const deezerOAuthUrl = `https://connect.deezer.com/oauth/auth.php?app_id=${appId}&redirect_uri=${redirectUri}&perms=basic_access,email&response_type=token`;
    console.log(deezerOAuthUrl);
    fetch(deezerOAuthUrl);
    console.log(deezerOAuthUrl);
	}, []);
  
	return <Text>carregando...</Text>;
};

export default Loading;