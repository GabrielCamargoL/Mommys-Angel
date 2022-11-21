import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../types/propsStack";
import Loading from "../../components/Loading";
import { Container, SafeAreaView, Col, Row } from "./styles";
import { ButtonsHome } from "../../components/ButtonsHome";
import { BabyState } from "../../components/BabyState";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Alert } from "react-native";

export function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	const navigation = useNavigation<propsStack>();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<>
			{loading ?
				<Loading />
				:
				<SafeAreaView>
					<Container>
						<BabyState />
						<ButtonsHome />
					</Container>
				</SafeAreaView>
			}
		</>
	);
}