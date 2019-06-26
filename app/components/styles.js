import {Platform, StatusBar, StyleSheet, Dimensions} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight


export const ONE_SECOND = 1000

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
	sm: 12,
	md: 18,
	lg: 28,
	primary: 'Cochin'
}

const baseStyles = {
	container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
	header: {
		backgroundColor: 'transparent',
		fontSize: fonts.lg,
		fontFamily: fonts.primary,
		fontWeight: 'bold'
	},
	statusBar: {
        // barStyle: "light-content",
        height: STATUSBAR_HEIGHT,
        backgroundColor: colors.secondary,
	},
	navTitle: {
		flex: 1,
		color: '#FFF',
	},
	navTitleCenter: {
		flex: 1,
        color: '#FFF',
        fontSize: 24,
		textAlign: 'center',
	},
	navBar: {
		backgroundColor: colors.primary,
		marginTop: STATUSBAR_HEIGHT
	},
	image: {
		width: hp('12.5%'),
		height: hp('12.5%'),
		marginTop: hp('7.5%')
	},
	form: {
		borderRadius: 5,
		borderWidth: wp('1%'),
		borderColor: '#D5DCDF',
		marginTop: hp('3%'),
		backgroundColor: '#F0F7FA'
	},
    firstNameInput: {
        padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
        borderBottomWidth: 1,
		textAlign: 'center',
    },
    lastNameInput: {
        padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    phoneNumberInput: {
        padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
        textAlign: 'center'
    },
    usernameInput: {
        padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
        textAlign: 'center'
    },
    facebookInput: {
        padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
        textAlign: 'center'
    },
    companyNameInput: {
        padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
        textAlign: 'center'
    },
    titleInput: {
        padding: 0,
		paddingLeft: wp('1%'),
		marginTop: hp('1%'),
		fontSize: 14,
		height: hp('4%'),
		width: wp('75%'),
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
        textAlign: 'center'
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
        flexDirection: "row",
    },
    buttonText: {
		color: "white",
		fontSize: 14,
	},
	text: {
		marginTop: hp("0.4%")
	},
	boldText: {
		marginTop: hp("0.4%"),
		fontWeight: 'bold'
	},
	facebookText: {
		marginTop: hp("0.4%"),
		color: "#3b5998"
	},
	instagramText: {
		marginTop: hp("0.4%"),
		color: '#833AB4'
	},
	italicText: {
		marginTop: hp("0.4%"),
		fontStyle: "italic"
	}
}

export default function createStyles(overrides = {}) {
	return StyleSheet.create({...baseStyles, ...overrides})
}
