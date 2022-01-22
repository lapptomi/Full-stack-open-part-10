import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(
      `${this.namespace}:token`
    );

    return token ? JSON.parse(token) : [];
  }

  setAccessToken(accessToken) {
    // Add the access token to the storage
    AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(accessToken)
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    try {
      await AsyncStorage.removeItem(`${this.namespace}:token`);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default AuthStorage;
