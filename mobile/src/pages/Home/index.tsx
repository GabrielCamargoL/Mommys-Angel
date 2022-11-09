import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { propsStack } from "../../types/propsStack";
import Loading from "../../components/Loading";
import { Container, Col, Row } from "./styles";
import { ButtonsHome } from "../../components/ButtonsHome";

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
				<Container>
					<ButtonsHome />
				</Container>
			}
		</>
	);
}