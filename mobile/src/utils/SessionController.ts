import { AsyncStorage } from 'react-native';
import { IUser } from '../types/IUser';

class SessionController {
  async clearRecords() {
    await AsyncStorage.clear();
  }

  async getToken() {
    const sessionToken = await AsyncStorage.getItem('token');
    if (!sessionToken) {
      return null;
    }
    const token: string = JSON.parse(sessionToken);
    return token;
  }

  async setToken(token: string) {
    await AsyncStorage.setItem('token', JSON.stringify(token));
  }

  async setUserInfo(user: IUser) {
    await AsyncStorage.setItem('userData', JSON.stringify(user));
  }

  async clearUserInfo() {
    await AsyncStorage.removeItem('userData');
  }

  async getUserInfo() {
    const sessionUser = await AsyncStorage.getItem('userData');
    if (!sessionUser) {
      return null;
    }
    const user: IUser = JSON.parse(sessionUser);
    return user;
  }
}

export default new SessionController();