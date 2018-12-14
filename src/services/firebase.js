// @flow

import firebase from 'react-native-firebase';


class FirebaseService {
  db: any;

  constructor() {
    this.db = firebase.firestore().collection('users');
  }

  async addUser(user: User) {
    await this.db.add(user);
  }
}
export const firebaseService = new FirebaseService();
