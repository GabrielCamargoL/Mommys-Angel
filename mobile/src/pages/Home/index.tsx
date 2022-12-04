import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../types/propsStack";
import Loading from "../../components/Loading";
import { Container, SafeAreaView } from "./styles";
import { BabyState } from "../../components/BabyState";

import SessionController from "../../utils/SessionController";
import { Alert } from "react-native";
import { IUser } from "../../types/IUser";
import { api } from "../../services/api";

export function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, setUser] = useState<IUser>();
	const [lastMenstruation, setLastMenstruation] = useState();
	const navigation = useNavigation<propsStack>();

	useEffect(() => {
		getUserInfo();
		getGestation();
		setLoading(false);
	}, []);

	useEffect(() => {
		getGestation();
	}, []);

	async function getGestation() {
		const user = await SessionController.getUserInfo();
		const response = await api.get(`/gestations/${user?._id}`)
		setLastMenstruation(response.data[0].lastMenstruation)
	}

	async function getUserInfo() {
		const userData = await SessionController.getUserInfo();
		if (userData) setUser(userData);
		else navigation.navigate('Login');
	}
	return (
		<>
			{loading ?
				<Loading />
				:
				<SafeAreaView>
					<Container>
						<BabyState lastMenstruation={lastMenstruation} />
						{/* <ButtonsHome /> */}
					</Container>
				</SafeAreaView>
			}
		</>
	);
}