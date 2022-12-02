import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../types/propsStack";
import Loading from "../../components/Loading";
import { Container, SafeAreaView } from "./styles";
import { BabyState } from "../../components/BabyState";

import SessionController from "../../utils/SessionController";
import { Alert } from "react-native";
import { IUser } from "../../types/IUser";

export function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useState<IUser>();
	const navigation = useNavigation<propsStack>();

	useEffect(() => {
		getUserInfo();
		setLoading(false);
	}, []);

	async function getUserInfo() {
		const userData = await SessionController.getUserInfo();
		if (userData) setUser(userData);
		else navigation.navigate('Home');
	}
	return (
		<>
			{loading ?
				<Loading />
				:
				<SafeAreaView>
					<Container>
						<BabyState />
						{/* <ButtonsHome /> */}
					</Container>
				</SafeAreaView>
			}
		</>
	);
}