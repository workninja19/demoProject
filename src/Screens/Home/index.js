import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import { TransHeader, Posts } from '../../Components';
import { Avatar } from 'react-native-elements';
import { SingleImage } from 'react-native-zoom-lightbox';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import styles from './styles';

export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Home'
	};
	constructor(props) {
		super(props);
		this.state = {
			customBackgroundModal: false,
			defaultAnimationModal: false,
			swipeableModal: false,
			scaleAnimationModal: false,
			slideAnimationModal: false,
			bottomModalAndTitle: false,
			bottomModal: false,
			posts: [
				{
					proPic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					postImg:
						'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					userName: 'Ironman',
					likes: 113,
					comments: 3,
					like: true
				},
				{
					proPic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					postImg:
						'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					userName: 'Thor',
					likes: 11,
					comments: 1,
					like: false
				},
				{
					proPic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					postImg:
						'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					userName: 'Ironman',
					likes: 113,
					comments: 3,
					like: true
				},
				{
					proPic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					postImg:
						'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					userName: 'Thor',
					likes: 11,
					comments: 1,
					like: false
				}
			]
		};
	}
	logout = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Main');
	};
	render() {
		return (
			<View style={styles.container}>
				<TransHeader
					onLeftPress={() => this.props.navigation.goBack()}
					headerTextColor='#5360F2'
					headerTitle={'HOME'}
					leftIconStyle={{
						width: 20,
						height: 30,
						tintColor: '#000', resizeMode: 'contain'
					}}
					rightIconStyle={{
						width: 20,
						height: 30,
						tintColor: '#000', resizeMode: 'contain'
					}}
					onRightPress={() => {
						this.setState({
							bottomModalAndTitle: true,
						});
					}}
				/>
				<ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
					<Posts
						username={'Work Ninja'}
						avatarImg={{
							uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
						}}
						postImg={'https://papers.co/desktop/wp-content/uploads/papers.co-nn04-city-water-river-night-light-bokeh-romantic-29-wallpaper-320x180.jpg'}
						like={'12'}
						likes={'12'}
						comments={'45'}
					/>
					<Posts
						username={'Work Ninja'}
						avatarImg={{
							uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
						}}
						postImg={'https://papers.co/desktop/wp-content/uploads/papers.co-nm95-glasses-sun-minimal-bokeh-bokeh-29-wallpaper-320x180.jpg'}
						like={'1'}
						likes={'11'}
						comments={'5'}
					/>
					<Posts
						username={'Work Ninja'}
						avatarImg={{
							uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
						}}
						postImg={'https://papers.co/desktop/wp-content/uploads/papers.co-bj90-art-japan-girl-illust-sword-pink-29-wallpaper-320x180.jpg'}
						like={'1'}
						likes={'19'}
						comments={'6'}
					/>
				</ScrollView>
			</View>
		);
	}
}
