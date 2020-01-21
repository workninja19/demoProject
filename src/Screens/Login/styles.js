import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: { flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#fff' },
	loginText: {
		fontSize: 50,
		textAlign: 'center',
		paddingVertical: 20,
		justifyContent: 'center'
	},
	sectionCard: {
		width: '90%',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignContent: 'center',
		alignSelf: 'center',
		borderRadius: 10,
		paddingTop: 30,
		// Shadow
		shadowOffset: {
			// width: 0,
			height: 5
		},
		shadowColor: '#F0F0F0',
		shadowOpacity: 5,
		elevation: 8
		// shadowRadius: 10
	},
	forgotText: {
		fontSize: 16,
		textAlign: 'right',
		paddingRight: 20,
		alignContent: 'center',
		color: '#808080',
		marginTop: 15
	},
	buttonStyle: {
		width: '100%',
		height: 45,
		padding: 13,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		//Shadow
		shadowOffset: {
			height: 8
		},
		shadowColor: '#D7D6D6',
		shadowOpacity: 5,
		elevation: 10
	},
	titleStyle: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
		alignSelf: 'center',
		lineHeight: 18
	},
	accountTextView: { justifyContent: 'center', flexDirection: 'row', marginTop: 45 },
	accountText: { fontSize: 16, justifyContent: 'center', color: '#808080' },
	signupText: {
		fontSize: 18,
		textTransform: 'uppercase',
		color: '#AB4E71',
		fontWeight: 'bold',
		justifyContent: 'center'
	}
});

export default styles;
