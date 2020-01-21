import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { InputLogin, emptyField } from '../../Components/InputLogin';
import IconFeather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import firebase from 'firebase';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
			password: null,
			ConfPass: null,
			passShow: true
		};
	}
	signUp() {
		const { password, username, email } = this.state;
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => {
				console.log("User Created => ", user)
				if (user) {
					user.user.updateProfile({
						displayName: this.state.fullname
					}).then(user => {
						this.props.navigation.navigate('Login')
						console.log(user)
					})
				}
			})
			.catch(error => {
				console.log("can not create register user", error);
			});
	}
	render() {
		return (
			<View style={styles.mainView}>
				<Text style={styles.signText}> Sign Up </Text>
				<View style={styles.sectionCard}>
					<InputLogin
						placeholder="User Name"
						rightIcon={
							<IconFeather
								name={'user'}
								onChangeText={(text) => this.setState({ name: text })}
								size={20}
								// color={getError(this.state.username)}
								style={{ paddingRight: 5 }}
								onPress={() => { }}
							/>
						}
					/>
					<InputLogin
						placeholder="Email"
						onChangeText={(text) => this.setState({ email: text })}
						rightIcon={
							<IconFeather
								name={'mail'}
								size={20}
								// color={getError(this.state.username)}
								style={{ paddingRight: 5 }}
								onPress={() => { }}
							/>
						}
					/>
					<InputLogin
						placeholder="Password"
						onChangeText={(text) => this.setState({ password: text })}
						secureTextEntry
						rightIcon={
							<IconFeather
								name={'key'}
								size={20}
								// color={getError(this.state.username)}
								style={{ paddingRight: 5 }}
								onPress={() => { }}
							/>
						}
					/>
					<InputLogin
						placeholder="Confirm Password"
						onChangeText={(text) => this.setState({ ConfPass: text })}
						secureTextEntry
						rightIcon={
							<IconFeather
								name={'key'}
								size={20}
								// color={getError(this.state.username)}
								style={{ paddingRight: 5 }}
								onPress={() => { }}
							/>
						}
					/>
					<TouchableOpacity
						style={{
							width: '40%',
							alignSelf: 'center',
							bottom: -25
						}}
						onPress={() => this.signUp()}
					>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							colors={['#429CEF', '#29EEF3']}
							style={styles.buttonStyle}
						>
							<Text style={styles.titleStyle}>Sign Up</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>

				<View style={styles.accountTextView}>
					<Text style={styles.accountText}>Already Have an Account? </Text>
					<Text style={styles.loginText} onPress={() => this.props.navigation.navigate('Login')}>
						Login
					</Text>
				</View>
			</View>
		);
	}
}
