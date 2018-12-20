const functions = require('firebase-functions');

const admin = require('firebase-admin');

const rp = require('request-promise');

// initializes your application
admin.initializeApp(functions.config().firebase);

exports.onUserAdded = functions.firestore
  .document('users/{userId}')
  .onCreate((snapshot, context) => {
    const user = snapshot.data();

    return Promise.all([
      addToMailingList(user),
      user.phoneNumber ? requestAppDownload(user) : Promise.resolve(),
    ]);
  });

const iterableUrl = 'https://api.iterable.com/api/';

const apiKey = 'c4c87f17ec114d7b91c08bd391c1041a';

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