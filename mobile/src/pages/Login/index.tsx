import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Loading from '../../components/Loading';
import { api } from '../../services/api';
import { propsStack } from '../../types/propsStack';
import SessionController from '../../utils/SessionController';

function Login() {
	const [register, setRegister] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const navigation = useNavigation<propsStack>();

	useEffect(() => {
		getToken()
	}, []);

	async function getToken() {
		const token = await SessionController.getToken();
		const user = await SessionController.getUserInfo();
		if (token && user) navigation.navigate('RegisterGestation')
	}

	async function handleLogin() {
		try {
			const response = await api.post(`/auth`, {
				email,
				password
			});

			await SessionController.setToken(response.data.token);
			await SessionController.setUserInfo(response.data.user);

			navigation.navigate('RegisterGestation');
		} catch (error) {
			Alert.alert('algo deu errado, tente novamente mais tarde.')
		}
	}

	async function handleRegister() {
		try {
			const response = await api.post(`/users`, {
				username: name,
				email,
				password
			});

			await SessionController.setToken(response.data.token);
			await SessionController.setUserInfo(response.data.user);


			navigation.navigate('RegisterGestation');
		} catch (error) {
			console.error(error);
			Alert.alert('algo deu errado, tente novamente mais tarde.')
		}
	}

	return (<>
		<View style={styles.container}>
			<LinearGradient
				colors={['#EED7F5', '#FCCEC2', '#C6E1FC']}
				style={styles.linearGradient}
			>
				{!register ?
					<>
						<Image style={styles.logo} source={require('../../assets/img/logo.png')} />

						<View style={styles.formContainer}>
							<Text style={styles.label} >Email</Text>
							<TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
							<Text style={styles.label} >Senha</Text>
							<TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry style={styles.input} />
						</View>

						<TouchableOpacity onPress={() => handleLogin()}>
							<View style={styles.button}>
								<Text style={styles.buttonText}>Entrar</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => { setRegister(true) }}>
							<Text style={styles.headline}>Criar uma conta</Text>
						</TouchableOpacity>
					</>
					:

					<>
						<Image style={styles.logo} source={require('../../assets/img/logo.png')} />

						<View style={styles.formContainer}>
							<Text style={styles.label} >Nome</Text>
							<TextInput value={name} onChangeText={(text) => setName(text)} style={styles.input} />

							<Text style={styles.label} >Email</Text>
							<TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />

							<Text style={styles.label}>Senha</Text>
							<TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry style={styles.input} />
						</View>

						<TouchableOpacity style={{ marginBottom: 10 }} onPress={() => handleRegister()}>
							<View style={styles.button}>
								<Text style={styles.buttonText}>Criar Conta</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.center} onPress={() => { setRegister(false) }}>
							<Text style={styles.headlineRegister}>Já possui uma conta?</Text>
							<Text style={styles.headlineRegister}>Faça o Login</Text>
						</TouchableOpacity>
					</>
				}
			</LinearGradient>
		</View>
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
		height: 230,
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
		paddingLeft: 20,
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
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	headlineRegister: {
		marginBottom: 5,

		color: '#271E4A',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: 14,
		lineHeight: 16,
		letterSpacing: 0.1,
	}
});

export default Login;