const functions = require('firebase-functions');

const admin = require('firebase-admin');

var rp = require('request-promise');

// const request = require('request');

// initializes your application
admin.initializeApp(functions.config().firebase);

exports.onUserAdded = functions.firestore
  .document('users/{userId}')
  .onCreate((snapshot, context) => {
    const user = snapshot.data();

    return Promise.all([
      user.emailOptIn ? addToMailingList(user) : Promise.resolve(),
      user.phoneNumeer ? requestAppDownload(user) : Promise.resolve(),
    ]);
  });

const iterableUrl = 'https://api.iterable.com/api';

const apiKey = '2b4b5f8d652f44d186c0965c08f22f6f';

const listName = 'renogyBooth';

const platform = 'mobile';

const operatingSystem = 'iOs';

const iterableOptions = {
  method: 'POST',
  uri: `${iterableUrl}events/track?api_key=${apiKey}`,
  json: true,
}

function addToMailingList(user) {
  console.log('adding to mailing list', user.email);
    rp(
      Object.assign(
        {
          body: {
            email: user.email,
            eventName: 'mailingListSignup',
            dataFields: {
              listName,
              platform,
              operatingSystem,
            },
          },
        },
        iterableOptions
      )
    ).then(() => {
      console.log('SUCCESS');
      return true;
    })
    .catch((error) => {
      console.log('ERROR', error.message);
    });
}

function requestAppDownload(user) {
  console.log('request to download', user.email);
  rp(
    Object.assign(
      {
        body: {
          email: user.email,
          eventName: 'requestAppDownloadLink',
          dataFields: {
            platform,
            operatingSystem,
            phoneNumber: user.phoneNumber,
            campaign: listName,
          },
        },
      },
      iterableOptions
    )
  ).then(() => {
    console.log('SUCCESS');
    return true;
  })
  .catch((error) => {
    console.log('ERROR', error);
  });
}