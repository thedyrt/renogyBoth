// @flow

import firebase from 'react-native-firebase';


class FirebaseService {
  ref: any;

  constructor() {
    this.ref = firebase.firestore().collection('users');
  }

  async addUser(user: User) {
    await this.ref.add(user);
  }
}
export const firebaseService = new FirebaseService();


