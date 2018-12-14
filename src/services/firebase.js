// @flow

import firebase from 'react-native-firebase';


class FirebaseService {
  ref: any;

  constructor() {
    this.ref = firebase.firestore().collection('users');
  }

  async addUser(user: User) {
    const addedUser = await this.ref.add(user);
    console.log(addedUser);
  }
}
export const firebaseService = new FirebaseService();
