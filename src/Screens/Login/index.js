import React, { Component } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { InputLogin, emptyField } from '../../Components/InputLogin';
import IconFeather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
			passShow: true
		};
	}
	onPress() {
		const { pass, email } = this.state;

		if (emptyField(pass)) {
			pass == null ? this.setState({ pass: '' }) : null;
			<InputLogin value={pass} />;
		}
		if (emptyField(email)) {
			email == null ? this.setState({ email: '' }) : null;
			<InputLogin value={email} />;
		}
		if (emptyField(pass) == false && emptyField(email) == false) {
			firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
				console.log("USER =>", user)
				this.props.navigation.navigate('Main', {
					email: this.state.email,
				})
				console.log(user, "user");
			}).catch(e => console.log(e)
			)
		}
	}

	render() {
		return (
			<View style={styles.mainView}>
				<Text style={styles.loginText}>Login</Text>
				<View style={styles.sectionCard}>
					<InputLogin
						refer={(input) => {
							this.email = input;
						}}
						onSubmitEditing={() => this.pass.focus()}
						onChangeText={(text) => this.setState({ email: text }, () => { })}
						value={this.state.email}
						placeholder="Email"
						rightIcon={
							<IconFeather
								name={'mail'}
								size={20}
								style={{ paddingRight: 5 }}
								onPress={() => { }}
							/>
						}
					/>
					<InputLogin
						refer={(input) => {
							this.pass = input;
						}}
						onSubmitEditing={() => this.onPress()}
						placeholder="Password"
						secureTextEntry
						onChangeText={(text) => this.setState({ pass: text }, () => { })}
						value={this.state.pass}
						rightIcon={
							<IconFeather
								name={'key'}
								size={20}
								style={{ paddingRight: 5 }}
								onPress={() => { }}
							/>
						}
					/>
					<Text style={styles.forgotText} onPress={() => this.props.navigation.navigate('Home')}>
						Forgot Password?
					</Text>
					<TouchableOpacity
						style={{
							width: '40%',
							alignSelf: 'center',
							bottom: -25
						}}
						onPress={() => this.onPress()}
					>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							colors={['#429CEF', '#29EEF3']}
							style={styles.buttonStyle}
						>
							<Text style={styles.titleStyle}>Login</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
				<View style={styles.accountTextView}>
					<Text style={styles.accountText}>Don't Have an Account? </Text>
					<Text style={styles.signupText} onPress={() => this.props.navigation.navigate('SignUp')}>
						Sign Up
					</Text>
				</View>
			</View>
		);
	}
}
