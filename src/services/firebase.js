// @flow

import firebase from 'react-native-firebase';


class FirebaseService {
  db: any;

  constructor() {
    this.db = firebase.firestore().collection('users');
  }

  async addUser(user: User) {
    const addedUser = await this.db.add(user);
    console.log(addedUser);
  }
}
export const firebaseService = new FirebaseService();
