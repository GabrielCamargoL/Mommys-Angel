import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { propsStack } from "../../types/propsStack";
import Loading from "../../components/Loading";
import { Container, ButtonFeatures, ButtonFeaturesView } from "./styles";
import LinearGradient from "react-native-linear-gradient";

export function Home() {
	const [loading, setLoading] = useState<boolean>(false);
	const navigation = useNavigation<propsStack>();

	return (
		<>
			{loading ?
				<Loading />
				:
				<Container>
					<Text style={styles.title}>Home</Text>
					<ButtonFeaturesView>
						<ButtonFeatures title="kkkkk" onPress={() => { }} />
					</ButtonFeaturesView>
					<ButtonFeatures title="kkkkk" onPress={() => { }} />
					<ButtonFeatures title="kkkkk" onPress={() => { }} />
					<ButtonFeatures title="kkkkk" onPress={() => { }} />
				</Container>
			}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000'
	},
	title: {

	},
	linearGradient: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		height: '100%',
		width: '100%',
	},
});