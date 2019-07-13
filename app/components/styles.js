import {Platform, StatusBar, StyleSheet, Dimensions} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight

export const dimensions = {
	fullHeight: Dimensions.get('window').height,
	fullWidth: Dimensions.get('window').width
}

export const colors  = {
	primary: '#47A6D6',
	secondary: '#254B5A',
	tertiary: '#5DA6A7'
}

export const padding = {
	sm: 10,
	md: 20,
	lg: 30,
	xl: 40
}

export const fonts = {
	sm: 14,
	md: 18,
	lg: 28,
	primary: 'Cochin'
}

const baseStyles = {
	container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
	},
	centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
	},
	welcomeContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary
	},
	navTitle: {
		flex: 1,
		color: '#FFF'
	},
	navTitleCenter: {
		flex: 1,
		fontSize: fonts.lg,
        color: '#FFF',
		textAlign: 'center'
	},
	navBar: {
		backgroundColor: colors.primary,
		marginTop: STATUSBAR_HEIGHT
	},
	statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: colors.secondary
	},
	header: {
		backgroundColor: 'transparent',
		fontSize: fonts.lg,
		fontFamily: fonts.primary,
		fontWeight: 'bold'
	},
	welcomeTitle: {
		marginTop: hp('10s%'),
		fontSize: fonts.lg,
		fontWeight: 'bold',
		color: '#fff'
	},
	title: {
		marginTop: hp('10s%'),
		fontSize: fonts.lg,
		fontWeight: 'bold',
		color: '#4F4F4F'
	},
	logo: {
		marginTop: hp('1%'),
		backgroundColor: "#fff",
		width: wp('44%'),
		height: wp('44%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	person: {
		position: 'absolute',
		right: '8.8%',
		bottom: '8.8%',
		width: '23%',
		height: '23%',
		paddingLeft: '5%',
		zIndex: 2,
		backgroundColor: 'white'
	},
	form: {
		height: 'auto',
		flex: 1,
		flexGrow: 1,
	},
	formContainer: {
		flex: 0,
		flexGrow: 0,
		borderRadius: 5,
		borderWidth: hp('0.5%'),
		borderColor: '#D5DCDF',
		marginTop: hp('3%'),
		backgroundColor: '#F0F7FA',
		height: hp('36.7%'),
	},
    firstNameInput: {
		paddingLeft: wp('1%'),
		fontSize: fonts.sm,
		height: hp('4.5%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
        borderBottomWidth: hp('0.1%'),
		textAlign: 'center'
    },
    lastNameInput: {
		paddingLeft: wp('1%'),
		fontSize: fonts.sm,
		height: hp('4.5%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
        borderBottomWidth: hp('0.1%'),
        textAlign: 'center'
    },
    phoneNumberInput: {
		paddingLeft: wp('1%'),
		fontSize: fonts.sm,
		height: hp('4.5%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: hp('0.1%'),
        textAlign: 'center'
    },
    usernameInput: {
		paddingLeft: wp('1%'),
		fontSize: fonts.sm,
		height: hp('4.5%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: hp('0.1%'),
        textAlign: 'center'
    },
    facebookInput: {
		paddingLeft: wp('1%'),
		fontSize: fonts.sm,
		height: hp('4.5%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: hp('0.1%'),
        textAlign: 'center'
    },
    companyNameInput: {
		paddingLeft: wp('1%'),
		fontSize: fonts.sm,
		height: hp('4.5%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: hp('0.1%'),
        textAlign: 'center'
    },
    titleInput: {
		paddingLeft: wp('1%'),
		fontSize: fonts.sm,
		height: hp('4.5%'),
		width: wp('75%'),
		textAlign: 'center',
		marginBottom: 0,
		paddingBottom: 0,
    },
    button: {
		alignItems: 'center',
		backgroundColor: "#47a6d6",
		borderWidth: 1,
		borderColor: "#fff",
		width: wp("60%"),
		height: hp("5%"),
		marginTop: hp("5%"),
		justifyContent: "center",
		shadowOffset: {width: 0, height: 1},
		borderRadius: 2,
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		elevation: 2,
        flexDirection: "row"
    },
    buttonText: {
		color: "white",
		fontSize: fonts.sm
	},
	text: {
		marginTop: hp("0.4%")
	},
	boldText: {
		marginTop: hp("0.4%"),
		fontWeight: 'bold'
	},
	instagramText: {
		marginTop: hp("0.4%"),
		color: '#833AB4'
	},
	twitterText: {
		marginTop: hp("0.4%"),
		color: '#1da1f2'
	},
	facebookText: {
		marginTop: hp("0.4%"),
		color: "#3b5998"
	},
	italicText: {
		marginTop: hp("0.4%"),
		fontStyle: "italic"
	}
}

export default function createStyles(overrides = {}) {
	return StyleSheet.create({...baseStyles, ...overrides})
}
