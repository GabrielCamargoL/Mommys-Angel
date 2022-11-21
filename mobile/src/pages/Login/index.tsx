import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Loading from '../../components/Loading';
import { propsStack } from '../../types/propsStack';

function Login() {
	const [loading, setLoading] = useState<boolean>(false);
	const navigation = useNavigation<propsStack>();

	async function handleLogin() {
		navigation.navigate('Home')
	}

	useEffect(() => {

	}, []);

	return (<>
		{loading ?
			<Loading />
			:
			<View style={styles.container}>
				<LinearGradient
					colors={['#EED7F5', '#FCCEC2', '#C6E1FC']}
					style={styles.linearGradient}
				>
					<Image style={styles.logo} source={require('../../assets/img/logo.png')} />

					<View style={styles.formContainer}>
						<Text style={styles.label} >Email</Text>
						<TextInput style={styles.input} />
						<Text style={styles.label} >Senha</Text>
						<TextInput secureTextEntry style={styles.input} />
					</View>

					<TouchableOpacity onPress={() => handleLogin()}>
						<View style={styles.button}>
							<Text style={styles.buttonText} >Entrar</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => { }}>
						<Text style={styles.headline} >Esqueci minha Senha!</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => { }}>
						<Text style={styles.headline} >Criar uma conta</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		}
	</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	linearGradient: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		height: '100%',
		width: '100%',
	},

	logo: {
		width: 274,
		height: 274,
	},

	formContainer: {
		width: '80%',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},

	label: {
		marginLeft: 25,

		color: '#271E4A',
		opacity: 0.6,

		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: 14,
		lineHeight: 20,
	},
	input: {
		marginTop: 3,
		marginBottom: 15,
		height: 40,
		width: '100%',

		backgroundColor: '#FAFAFA',
		opacity: 0.6,
		borderRadius: 10,
		borderColor: '#DDD',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		height: 50,
		width: 100,
		backgroundColor: '#BE3CA0',
	},
	buttonText: {
		color: '#fff',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: 14,
		lineHeight: 16,
		letterSpacing: 0.1,
	},
	headline: {
		marginTop: 20,
		marginBottom: 5,

		color: '#271E4A',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: 14,
		lineHeight: 16,
		letterSpacing: 0.1,
	}
})
export default Login