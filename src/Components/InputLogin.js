import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

const color = '#888';

const validateEmail = (value) => {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (value != null) {
		if (reg.test(value) === false) {
			return (
				<View style={{ flexDirection: 'row', marginLeft: '5%' }}>
					<Text style={{ color: 'red' }}>Email invalid</Text>
				</View>
			);
		}
	}
};

const validatePhone = (value) => {
	if (value != null) {
		if (value.length != 10 || isNaN(value) == true) {
			return (
				<View style={{ flexDirection: 'row', marginLeft: '5%' }}>
					<Text style={{ color: 'red' }}>Phone invalid</Text>
				</View>
			);
		}
	}
};

const emptyFieldWarning = (value) => {
	if (value == '') {
		return (
			<View style={{ flexDirection: 'row', marginLeft: '5%' }}>
				<Text style={{ color: 'red' }}> This field is required</Text>
			</View>
		);
	}
};

export function emptyField(value) {
	if (value == null) {
		return true;
	} else {
		if (value == '') return true;
		else return false;
	}
}

export function emailField(value) {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (value == null) {
		return true;
	} else {
		if (value == '') {
			return true;
		} else {
			if (reg.test(value) === false) return true;
			else return false;
		}
	}
}

export function phoneField(value) {
	if (value == null) {
		return true;
	} else {
		if (value == '') return true;
		else {
			if (value.length != 10 || isNaN(value) == true) return true;
			else return false;
		}
	}
}

export function getError(value, keyboardType) {
	return value != null
		? keyboardType == 'email-address'
			? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/.test(value) === false ? 'red' : color
			: keyboardType == 'number-pad'
				? value.length != 10 || isNaN(value) == true ? 'red' : color
				: value == '' ? 'red' : color
		: value == '' ? 'red' : color;
}

const getErr = (value, keyboardType) => {
	return value != null
		? keyboardType == 'email-address'
			? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/.test(value) === false ? 'red' : color
			: keyboardType == 'number-pad'
				? value.length != 10 || isNaN(value) == true ? 'red' : color
				: value == '' ? 'red' : color
		: value == '' ? 'red' : color;
};

const InputLogin = ({
	label,
	refer,
	onSubmitEditing,
	returnKeyType,
	placeholder,
	keyboardType,
	multiline,
	maxLength,
	secureTextEntry,
	onChangeText,
	value,
	containerStyle,
	inputContainerStyle,
	inputStyle,
	onFocus,
	onBlur,
	blurOnSubmit,
	autoCapitalize,
	leftIcon,
	rightIcon
}) => {
	return (
		<View>
			<Input
				ref={refer}
				onSubmitEditing={onSubmitEditing}
				//
				returnKeyType={returnKeyType}
				//
				containerStyle={[style.containerStyles, containerStyle]}
				inputContainerStyle={[
					style.inputContainerStyles,
					inputContainerStyle,
					{
						borderColor: getErr(value, keyboardType)
					}
				]}
				// placeholderTextColor={'red'}
				placeholderTextColor={getErr(value, keyboardType)}
				inputStyle={[style.inputStyles, inputStyle]}
				labelStyle={style.labelStyle}
				//
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType}
				//
				multiline={multiline}
				maxLength={maxLength}
				//
				label={label}
				placeholder={placeholder}
				//
				onChangeText={onChangeText}
				value={value}
				//
				autoCorrect={false}
				onFocus={onFocus}
				//
				onBlur={onBlur}
				blurOnSubmit={blurOnSubmit}
				//
				autoCapitalize={autoCapitalize}
				leftIcon={leftIcon}
				rightIcon={rightIcon}
			/>
			<View style={{ flexDirection: 'row' }}>
				{emptyFieldWarning(value)}
				{value != '' ? keyboardType == 'email-address' ? validateEmail(value) : null : null}
				{value != '' ? keyboardType == 'number-pad' ? validatePhone(value) : null : null}
			</View>
		</View>
	);
};

const style = {
	containerStyles: {
		width: '97%',
		margin: 5
	},

	inputContainerStyles: {
		width: '100%',
		height: 45,
		// borderWidth: 1,
		// borderColor: color,
		// borderRadius: 10,
		paddingLeft: 5,
		borderBottomWidth: 1,
		// backgroundColor: '#fff',
		borderBottomColor: '#808080'
	},
	inputStyles: {
		fontSize: 18,
		color: '#222',
		alignSelf: 'center',
		marginLeft: 10
	},
	labelStyle: {
		fontSize: 16,
		padding: 7,
		paddingLeft: 0,
		color: '#808080'
	}
};

export { InputLogin };

/**
|--------------------------------------------------
| Example to call this functionc
|--------------------------------------------------
*/

/**
 * SIMPLE VALIDATION
 *
 * import { InputText, emptyField } from './common';
 *
 * onPress() {
		const { veriable } = this.state;
		if (emptyField(veriable)) {

			veriable == null ? this.setState({ veriable: '' }) : null;
			<InputText value={veriable} />;
		}
		if (emptyField(veriable) == false) {

			this.setState({ veriable: null });
			alert('Success');
		}
	}
 */

/**
 * EMAIL VALIDATION
 *
 * import { InputText, emailField } from './common';
 *
 * onPress() {
		const { veriable } = this.state;
		if (emailField(veriable)) {

			veriable == null ? this.setState({ veriable: '' }) : null;
			<InputText value={veriable} />;
		}
		if (emailField(veriable) == false) {

			this.setState({veriable: null});
			alert('Success');
		}
	}
 */
/**
 * PHONE_NUMBER VALIDATION
 *
 * import { InputText, phoneField } from './common';
 *
 * onPress() {
		const { veriable } = this.state;
		if (phoneField(veriable)) {

			veriable == null ? this.setState({ veriable: '' }) : null;
			<InputText value={veriable} />;
		}
		if (phoneField(veriable) == false) {

			this.setState({ veriable: null });
			alert('Success');
		}
	}
 */

/**
 * ALL TO GETHOR VALIDATION
 *
 * import { InputText, emptyField, emailField, phoneField } from './common';
 *
 * onPress() {
		const { veriable, emailVeriable, phoneNumberVeriable } = this.state;

		if (emptyField(veriable)) {

			veriable == null ? this.setState({ veriable: '' }) : null;
			<InputText value={veriable} />;
		}
		if (emailField(emailVeriable)) {

			emailVeriable == null ? this.setState({ emailVeriable: '' }) : null;
			<InputText value={emailVeriable} />;
		}
		if (phoneField(phoneNumberVeriable)) {

			phoneNumberVeriable == null ? this.setState({ phoneNumberVeriable: '' }) : null;
			<InputText value={phoneNumberVeriable} />;
		}
		if (emptyField(veriable) == false && emailField(emailVeriable) == false && phoneField(phoneNumberVeriable) == false) {

			this.setState({ veriable: null, emailVeriable: null, phoneNumberVeriable: null });
			alert('Success');
		}
	}
 */
